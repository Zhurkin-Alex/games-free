import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from '../../context/AppContext'
import Nav from '../index'

const theme = {
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
}

const renderWithProvider = (component: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <AppProvider>{component}</AppProvider>
    </ThemeProvider>,
  )
}

describe('Nav Component', () => {
  it('renders navigation links', () => {
    renderWithProvider(<Nav />)

    // Проверяем наличие рекламного текста
    expect(screen.getByText('Place for your advertisement')).toBeInTheDocument()

    // Проверяем наличие навигационных элементов
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()

    // Проверяем наличие кнопки меню
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(menuButton).toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles menu on button click', async () => {
    const user = userEvent.setup()
    renderWithProvider(<Nav />)

    // Находим и кликаем по гамбургер-меню
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(menuButton)

    // Проверяем, что меню открылось
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('menu', { name: /main menu/i })
    expect(menu).toBeInTheDocument()

    // Находим и кликаем по Games
    const gamesButton = screen.getByRole('menuitem', { name: /games/i })
    expect(gamesButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(gamesButton)

    // Проверяем, что подменю Games открылось
    expect(gamesButton).toHaveAttribute('aria-expanded', 'true')
    const gamesSubmenu = screen.getByRole('menu', { name: /games submenu/i })
    expect(gamesSubmenu).toBeInTheDocument()
  })
})
