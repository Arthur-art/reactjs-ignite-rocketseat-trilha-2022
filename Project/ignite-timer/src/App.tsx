import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="danger" />
      <Button variant="secondary" />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
