import { type FC, useRef, useState, useEffect } from 'react'
import Seo from '@/components/Seo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import NextLink from 'next/link'
import { lighten, darken } from '@mui/material/styles'
import MuiLink from '@mui/material/Link'
import Divider from '@mui/material/Divider'

type GalleryImage = Readonly<{
  phoneWarning?: boolean,
  imgurId: string,
  ext: `.${string}`,
  summary: string
}>

const images: readonly GalleryImage[] = [
  {
    imgurId: 'Uprp9eZ',
    ext: '.png',
    summary: 'DiscordのAARRのサーバーアイコン（2022年10月9日～）'
  },
  {
    imgurId: '45f4YDN',
    ext: '.gif',
    summary: 'DiscordのAARRのサーバーアイコン（2022年12月4日～）',
    phoneWarning: true
  },
  {
    imgurId: 'k9FnwHw',
    ext: '.gif',
    summary: 'DiscordのAARRのサーバーバナー（2022年12月5日～）',
    phoneWarning: true
  }
]

const GalleryPage: FC = () => {
  const [footerHeight, setFooterHeight] = useState(0)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (!footerRef.current) {
        return
      }

      setFooterHeight(footerRef.current.offsetHeight)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  })

  const description = 'コミュニティのアイコンの画像などを置いています。'

  return (
    <>
      <Seo
        title='ギャラリー'
        description={description}
      />
      <Box
        sx={{
          paddingBottom: `${footerHeight}px`,
          position: 'relative',
          boxSizing: 'border-box',
          minHeight: '100vh'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            width: '50%',
            margin: '0 auto',
            padding: '1rem',
            '@media screen and (max-width:1024px)': {
              width: '100%'
            }
          }}
        >
          <Stack spacing={1}>
            <Box>
              <Typography variant='h3' component='h1'>AARR</Typography>
              <Typography color='text.secondary'>{description}</Typography>
            </Box>
            <NextLink href='/' passHref>
              <MuiLink
                underline='hover'
                color='skyblue'
              >
                ホームに戻る
              </MuiLink>
            </NextLink>
            <Divider />
          </Stack>
          <Stack spacing={1}>
            <Typography fontSize='small' color='text.secondary'>
              画像をクリック（またはタップ）でオリジナルサイズの画像を開く
            </Typography>
            <Stack></Stack>
            {images.map(({ imgurId, ext, summary, phoneWarning = false }) => {

              return (
                <Card key={imgurId}>
                  <CardContent>
                    <Stack alignItems='flex-start' spacing={1}>
                      <Typography>{summary}</Typography>
                      <Box
                        component='img'
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          const a = document.createElement('a')

                          a.href = `https://i.imgur.com/${imgurId}${ext}`
                          a.target = '_blank'
                          a.rel = 'noopener noreferrer'

                          a.click()
                        }}
                        src={`https://i.imgur.com/${imgurId}b${ext}`}
                      />
                      {phoneWarning && <Typography fontSize='small' color='text.secondary'>この画像は一部のデバイスで重くなる現象が報告されているため注意</Typography>}
                    </Stack>
                  </CardContent>
                </Card>
              )
            })}
          </Stack>
        </Box>
        <Box
          ref={footerRef}
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            padding: '1rem',
            backgroundColor: ({ palette: { mode, background } }) => {
              const xen = mode === 'light' ? darken : lighten

              return xen(background.paper, 0.1)
            }
          }}
        >
          <footer>
            <Box
              sx={{
                width: '50%',
                height: '100%',
                margin: '0 auto',
                '@media screen and (max-width: 1024px)': {
                  width: '100%'
                }
              }}
            >
              <Typography fontSize='small' color='text.secondary'>© aarr-jp 2021</Typography>
            </Box>
          </footer>
        </Box>
      </Box>
    </>
  )
}

export default GalleryPage
