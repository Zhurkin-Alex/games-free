const React = require('react')

function processTemplateString(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] || '')
  }, '')
}

function createStyledComponent(tag, styles, baseComponent = null) {
  const StyledComponent = React.forwardRef((props, ref) => {
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

    const componentProps = {
      ...rest,
      ref,
      className: `styled-${tag} ${className}`.trim(),
      style,
      'data-testid': props['data-testid'] || `styled-${tag}`,
    }

    return baseComponent
      ? React.createElement(baseComponent, componentProps, children)
      : React.createElement(tag, componentProps, children)
  })

  StyledComponent.displayName = `Styled${tag.charAt(0).toUpperCase() + tag.slice(1)}`
  StyledComponent.toString = () => `styled.${tag}`

  return StyledComponent
}

function createStyledTag(tag) {
  const styledTag = (...args) => {
    // Обработка шаблонных литералов
    if (Array.isArray(args[0])) {
      return createStyledComponent(tag, processTemplateString(...args))
    }
    return createStyledComponent(tag, args[0])
  }

  styledTag.withConfig = config => {
    return (...args) => {
      const Component = Array.isArray(args[0])
        ? createStyledComponent(tag, processTemplateString(...args))
        : createStyledComponent(tag, args[0])

      Component.displayName =
        config.displayName || `Styled${tag.charAt(0).toUpperCase() + tag.slice(1)}`
      return Component
    }
  }

  return styledTag
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

function createStyledFunction(Component) {
  const styledFunction = (...args) => {
    if (Array.isArray(args[0])) {
      return createStyledComponent('div', processTemplateString(...args), Component)
    }
    return createStyledComponent('div', args[0], Component)
  }

  styledFunction.withConfig = config => {
    return (...args) => {
      const StyledComponent = Array.isArray(args[0])
        ? createStyledComponent('div', processTemplateString(...args), Component)
        : createStyledComponent('div', args[0], Component)

      StyledComponent.displayName =
        config.displayName || `Styled(${Component.displayName || Component.name || 'Component'})`
      return StyledComponent
    }
  }

  return styledFunction
}

const styled = Component => {
  return createStyledFunction(Component)
}

// Добавляем все HTML теги как методы styled объекта
tags.forEach(tag => {
  styled[tag] = createStyledTag(tag)
})

module.exports = styled
module.exports.default = styled
module.exports.css = (...args) =>
  Array.isArray(args[0]) ? processTemplateString(...args) : args[0]
module.exports.createGlobalStyle = () => () => null
module.exports.keyframes = (...args) =>
  Array.isArray(args[0]) ? processTemplateString(...args) : args[0]
module.exports.ThemeProvider = ({ children }) => children
module.exports.useTheme = () => ({
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
})
