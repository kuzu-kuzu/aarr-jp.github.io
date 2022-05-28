const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME

const useSiteName = (defaultSiteName = ''): string => (
  SITE_NAME ?? defaultSiteName
)

export default useSiteName
