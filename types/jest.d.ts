/// <reference types="@testing-library/jest-dom" />

declare namespace jest {
  interface Matchers<R = void> {
    toBeInTheDocument(): R
    toHaveAttribute(attr: string, value?: string): R
    toHaveClass(...classNames: string[]): R
    toHaveStyle(css: string | object): R
    toBeVisible(): R
    toHaveTextContent(text: string | RegExp): R
  }
}
