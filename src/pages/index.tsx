import { type FC, useRef, useState, useEffect } from 'react'
import Seo from '@/components/Seo'
import Box from '@mui/material/Box'
import { lighten, darken } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import MuiLink from '@mui/material/Link'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import useDiscordInvite from '@/util/hooks/useDiscordInvite'

const Home: FC = () => {
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

  const description = 'AARRの公式サイトでは、活動内容や実績などAARRの最新情報をお届けします。'

  return (
    <>
      <Seo
        title='ホーム'
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
          <Box>
            <Typography variant='h3' component='h1'>AARR</Typography>
            <Typography color='text.secondary'>{description}</Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              columnGap: '1rem',
              rowGap: '1rem',
              gridTemplateRows: '50% 50%',
              gridTemplateColumns: '50% 50%'
            }}
          >
            <Box>
              <Typography variant='h5' component='h2'>AARRとは？</Typography>
              <Typography color='text.secondary'>AARR（Accurate And Revelatory Reporter）は、ボランティアによる洗練されたスキルやツールで、Discordのトラブルやネットいじめを正確に報告する団体です。</Typography>
            </Box>
            <Box>
              <Typography variant='h5' component='h2'>実績</Typography>
              <Box
                component='ul'
                sx={{
                  margin: 0,
                  paddingInlineStart: '1rem'
                }}
              >
                {['大手ショップのRShopを10日連続停止。', 'GhostHaxなどの大規模荒らしサーバーの停止。', '悪意のあるサーバーを停止した数は数十件以上。'].map((v, i) => (
                  <li key={i}><Typography color='text.secondary'>{v}</Typography></li>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography variant='h5' component='h2'>AARRのDiscordに参加</Typography>
              <Typography color='text.secondary'>AARRはあなたの参加を待っています。</Typography>
              <NextLink href={useDiscordInvite()} passHref>
                <MuiLink
                  target='_blank'
                  rel='noopener noreferrer'
                  underline='hover'
                  color='skyblue'
                >
                  Discord
                  <OpenInNewIcon color='disabled' sx={{ marginLeft: '0.1rem', verticalAlign: 'middle', fontSize: '1rem' }} />
                </MuiLink>
              </NextLink>
            </Box>
            <Box>
              <Typography variant='h6'>AARRのシンボルマーク</Typography>
              <Box
                component='img'
                src='/images/logo.png'
                width={216}
                sx={{
                  marginTop: '1rem',
                  verticalAlign: 'middle'
                }}
              />
            </Box>
          </Box>
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

export default Home
