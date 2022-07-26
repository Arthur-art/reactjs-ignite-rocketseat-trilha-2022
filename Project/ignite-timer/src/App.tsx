import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button/Button"
import { GlobalStyle } from "./styles/global"
import { darkTheme, defaultTheme } from "./styles/themes/default"


function App() {

  const [state, setState] = useState(defaultTheme)

  const handleTheme = () =>{

    if(state===defaultTheme){
      setState(darkTheme)
    }else{
      setState(defaultTheme)
    }
  }

  return (
    <ThemeProvider theme={state}>
    <Button variant="danger"/>
    <Button variant="secondary"/>
    {state === defaultTheme && <button onClick={handleTheme}>dark</button>}
    {state === darkTheme && <button onClick={handleTheme}>light</button>}
    <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
