const React = require('react')

function createStyledComponent(tag, styles) {
  const component = React.forwardRef((props, ref) => {
    const { children, $isOpen, className = '', ...rest } = props
    
    // Базовые стили для компонентов
    const baseStyles = {
      nav: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        alignItems: 'center',
      },
      div: {
        display: 'flex',
      },
      ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
      li: {
        margin: 0,
        padding: 0,
      },
    }

    const style = {
      ...(baseStyles[tag] || {}),
      ...($isOpen !== undefined ? { display: $isOpen ? 'block' : 'none' } : {}),
      ...rest.style,
    }

    return React.createElement(
      tag,
      {
        ...rest,
        ref,
        className: `styled-${tag} ${className}`.trim(),
        style,
        'data-testid': props['data-testid'] || `styled-${tag}`,
      },
      children
    )
  })

  component.displayName = `Styled${tag.charAt(0).toUpperCase() + tag.slice(1)}`
  component.toString = () => `styled.${tag}`
  
  // Добавляем поддержку withComponent
  component.withComponent = (newTag) => createStyledComponent(newTag, styles)
  
  return component
}

const tags = [
  'a',
  'button',
  'div',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'nav',
  'main',
  'section',
  'footer',
  'p',
  'span',
  'ul',
  'li',
  'input',
  'label',
  'form',
]

const styled = new Proxy((Component) => {
  return (...args) => {
    if (typeof Component === 'string') {
      return createStyledComponent(Component, args[0])
    }
    
    return React.forwardRef((props, ref) => {
      const { className = '', style = {}, ...rest } = props
      return React.createElement(Component, {
        ...rest,
        ref,
        className: `styled-component ${className}`.trim(),
        style: { ...style },
        'data-testid': props['data-testid'] || 'styled-component',
      })
    })
  }
}, {
  get: (target, property) => {
    if (tags.includes(property)) {
      return (...args) => createStyledComponent(property, args[0])
    }
    return target[property]
  }
})

// Добавляем поддержку styled.tag
tags.forEach(tag => {
  styled[tag] = (...args) => createStyledComponent(tag, args[0])
})

module.exports = styled
module.exports.default = styled
module.exports.css = (...args) => args[0]
module.exports.createGlobalStyle = () => () => null
module.exports.keyframes = styles => styles
module.exports.ThemeProvider = ({ children }) => children
module.exports.useTheme = () => ({
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
})
