import { type FC } from 'react'
import { type AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeModeProvider from '@/components/ThemeModeProvider'
import defaultSeoProps from '~/next-seo.config'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...defaultSeoProps} />
    <ThemeModeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeModeProvider>
  </>
)

export default App
