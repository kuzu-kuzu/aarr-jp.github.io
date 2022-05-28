import { type FC, type ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

type ThemeModeProviderProps = Readonly<{
  children: ReactNode
}>

const ThemeModeProvider: FC<ThemeModeProviderProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#c80000'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeModeProvider
export { type ThemeModeProviderProps }
