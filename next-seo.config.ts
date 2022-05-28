import { type DefaultSeoProps } from 'next-seo'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME

const defaultSeoProps: DefaultSeoProps = {
  titleTemplate: (
    typeof SITE_NAME === 'undefined'
      ? '%s'
      : `%s | ${SITE_NAME}`
  )
}

export default defaultSeoProps
