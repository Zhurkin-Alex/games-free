import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from '../../context/AppContext'
import Nav from '../index'
import NavSkeleton from '../skeleton'

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

jest.useFakeTimers()

describe('Nav Component', () => {
  afterEach(() => {
    jest.clearAllTimers()
  })

  it('shows skeleton while loading and then renders navigation', async () => {
    renderWithProvider(<Nav />)

    // Проверяем, что сначала отображается скелетон
    const skeletonNav = screen.getByTestId('nav-skeleton')
    expect(skeletonNav).toBeInTheDocument()

    // Ждем окончания загрузки
    jest.advanceTimersByTime(1000)

    // Проверяем, что скелетон исчез и появился основной контент
    await waitFor(() => {
      expect(screen.queryByTestId('nav-skeleton')).not.toBeInTheDocument()
      expect(screen.getByText('Place for your advertisement')).toBeInTheDocument()
    })
  })

  it('renders navigation links after loading', async () => {
    renderWithProvider(<Nav />)

    // Пропускаем начальную загрузку
    jest.advanceTimersByTime(1000)

    await waitFor(() => {
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
  })

  it('toggles menu on button click after loading', async () => {
    const user = userEvent.setup()
    renderWithProvider(<Nav />)

    // Пропускаем начальную загрузку
    jest.advanceTimersByTime(1000)

    await waitFor(async () => {
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

  it('renders skeleton component correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavSkeleton />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('nav-skeleton')).toBeInTheDocument()
  })
})
