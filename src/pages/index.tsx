import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NextLink from 'next/link';
import { type FC, useState } from 'react';
import LinkShare from '~/components/LinkShare';
import Seo from '~/components/Seo';
import { useDiscordInvite } from '~/hooks/useDiscordInvite';

const DISCORD_INVITE_CODE = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE;
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

const Home: FC = () => {
  const theme = useTheme();
  const [discordInviteCopyStatus, setDiscordInviteCopyStatus] = useState<'error' | 'success'>();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const gridItemWidth = isSmallScreen ? '100%' : '50%';
  const discordInvite = useDiscordInvite();

  return (
    <>
      <Seo />
      <Snackbar
        onClose={() => setDiscordInviteCopyStatus(undefined)}
        open={typeof discordInviteCopyStatus !== 'undefined'}
        autoHideDuration={2000}
      >
        <Alert
          variant='filled'
          sx={{ width: '100%' }}
          severity={discordInviteCopyStatus}
        >
          {discordInviteCopyStatus === 'success' && '招待リンクをコピーしました'}
          {discordInviteCopyStatus === 'error' && '招待リンクをコピーできませんでした'}
        </Alert>
      </Snackbar>
      <Stack spacing={4} paddingBottom='2rem'>
        <Typography color='text.secondary'>{SITE_DESCRIPTION}</Typography>
        <Box>
          <Grid container spacing={4}>
            <Grid item width={gridItemWidth}>
              <Typography variant='h5' component='h2'>AARRとは？</Typography>
              <Typography color='text.secondary'>
                AARR（Accurate And Revelatory Reporter）は、ボランティアによる洗練されたスキルやツールで、Discordのトラブルやネットいじめを正確に報告する団体です。
                <br />
                2021年に荒らし連合から派生しました。
              </Typography>
            </Grid>
            <Grid item width={gridItemWidth}>
              <Typography variant='h5' component='h2'>実績</Typography>
              <Box
                component='ul'
                sx={{
                  margin: 0,
                  paddingInlineStart: '1rem'
                }}
              >
                {[
                  '大手ショップのRShopを10日連続停止。',
                  'GhostHaxなどの大規模荒らしサーバーの停止。',
                  '悪意のあるサーバーを停止した数は数十件以上。'
                ].map(v => (
                  <li key={v}><Typography color='text.secondary'>{v}</Typography></li>
                ))}
              </Box>
            </Grid>
            <Grid item width={gridItemWidth}>
              <Stack spacing={2}>
                <Box>
                  <Typography variant='h5' component='h2'>AARRのDiscordに参加</Typography>
                  <Typography color='text.secondary'>AARRはあなたの参加を待っています。</Typography>
                </Box>
                <LinkShare
                  href={discordInvite}
                  onClick={async href => {
                    setDiscordInviteCopyStatus(undefined);

                    try {
                      await window.navigator.clipboard.writeText(href);
                      setDiscordInviteCopyStatus('success');
                    } catch {
                      setDiscordInviteCopyStatus('error');
                    }
                  }}
                >
                  <NextLink href={discordInvite} passHref>
                    <MuiLink
                      target='_blank'
                      rel='noopener noreferrer'
                      underline='hover'
                      color='skyblue'
                      fontSize='large'
                    >
                      discord.gg/{DISCORD_INVITE_CODE}
                      <OpenInNewIcon color='disabled' sx={{ marginLeft: '0.1rem', verticalAlign: 'middle' }} />
                    </MuiLink>
                  </NextLink>
                </LinkShare>
              </Stack>
            </Grid>
            <Grid item width={gridItemWidth}>
              <Stack spacing={2} alignItems='flex-start'>
                <Box>
                  <Typography variant='h6'>AARRのシンボルマーク</Typography>
                  <Box
                    component='img'
                    src='/images/logo-216x216.png'
                    width={216}
                    sx={{
                      marginTop: '1rem',
                      verticalAlign: 'middle'
                    }}
                  />
                </Box>
                <NextLink href='/gallery/' passHref>
                  <MuiLink
                    underline='hover'
                    color='skyblue'
                  >
                    他の画像も見る
                    <KeyboardArrowRightIcon
                      color='disabled'
                      sx={{ verticalAlign: 'bottom' }}
                    />
                  </MuiLink>
                </NextLink>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default Home;
