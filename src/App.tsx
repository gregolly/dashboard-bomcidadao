import{ BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OccurrenceContextProvider } from './contexts/OccurrenceContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OccurrenceContextProvider>
          <Router />
        </OccurrenceContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
