import { useEffect, useRef } from 'react'

import chip from '../img/chip.webp'

const NUM_FLYING_ELEMENTS = 15

const FlyingElements = () => {
  const elementsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const moveElement = (element: HTMLDivElement) => {
      const restartAnimation = () => {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight

        const size = Math.random() * 25 + 20
        const duration = Math.random() * 10000 + 2000

        const styles = {
          transition: `transform ${duration}ms ease-in-out, width 12s ease-in-out, height 12s ease-in-out`,
          transform: `translate(${x - element.offsetLeft}px, ${y - element.offsetTop}px)`,
          width: `${size}px`,
          height: `${size}px`,
        }

        Object.assign(element.style, styles)
      }

      element.addEventListener('transitionend', () => {
        restartAnimation()
      })

      restartAnimation()
    }

    const createFlyingElement = () => {
      const flyingElement = document.createElement('div') as HTMLDivElement
      document.body.appendChild(flyingElement)

      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight

      flyingElement.style.left = `${x}px`
      flyingElement.style.top = `${y}px`
      flyingElement.style.position = 'fixed'
      flyingElement.style.width = '25px'
      flyingElement.style.height = '25px'
      flyingElement.style.backgroundImage = `url(${chip.src})`
      flyingElement.style.zIndex = '0'
      flyingElement.style.backgroundSize = 'cover'
      flyingElement.style.borderRadius = '50%'
      flyingElement.style.transition =
        'transform 20s ease-in-out, width 12s ease-in-out, height 12s ease-in-out;'

      const size = Math.random() * 25 + 15

      flyingElement.style.width = `${size}px`
      flyingElement.style.height = `${size}px`

      moveElement(flyingElement)
      elementsRef.current.push(flyingElement)
    }

    for (let i = 0; i < NUM_FLYING_ELEMENTS; i += 1) {
      createFlyingElement()
    }

    return () => {
      elementsRef.current.forEach(element => {
        element.remove()
      })
      elementsRef.current = []
    }
  }, [])

  return null
}

export default FlyingElements
