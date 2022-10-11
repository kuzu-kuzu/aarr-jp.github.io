import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { darken, lighten } from '@mui/material/styles';
import { type FC } from 'react';
import Spacer from '~/components/Spacer';

const SpacingLayoutFooter: FC = () => (
  <Box
    sx={{
      backgroundColor: ({ palette: { mode, background } }) => {
        const xen = mode === 'light' ? darken : lighten;

        return xen(background.paper, 0.1);
      },
      bottom: 0,
      padding: '1rem',
      width: '100%'
    }}
  >
    <footer>
      <Spacer>
        <Typography fontSize='small' color='text.secondary'>© aarr-jp 2021</Typography>
      </Spacer>
    </footer>
  </Box>
);

export default SpacingLayoutFooter;
