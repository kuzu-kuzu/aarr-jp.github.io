import useSiteDomain from '@/util/hooks/useSiteDomain'

const SITE_PROTOCOL = process.env.NEXT_PUBLIC_SITE_PROTOCOL

const useBaseUrl = (defaultSiteProtocol = 'http:', defaultSiteDomain = ''): string => {
  const protocol = SITE_PROTOCOL ?? defaultSiteProtocol
  const domain = useSiteDomain(defaultSiteDomain)
  const baseUrl = `${protocol}//${domain}`

  return baseUrl
}

export default useBaseUrl
