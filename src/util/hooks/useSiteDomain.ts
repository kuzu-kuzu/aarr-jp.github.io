const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN

const useSiteDomain = (defaultSiteDomain = ''): string => (
  SITE_DOMAIN ?? defaultSiteDomain
)

export default useSiteDomain
