import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type FC, useState } from 'react';
import CommonDialog from '~/components/CommonDialog';
import Seo from '~/components/Seo';

type GalleryImage = Readonly<{
  ext: `.${string}`,
  imgurId: string,
  summary: string,
  phoneWarning?: boolean
}>;

const images: readonly GalleryImage[] = [
  {
    ext: '.png',
    imgurId: 'Uprp9eZ',
    summary: 'DiscordのAARRのサーバーアイコン（2022年10月9日～）'
  },
  {
    ext: '.gif',
    imgurId: '45f4YDN',
    phoneWarning: true,
    summary: 'DiscordのAARRのサーバーアイコン（2021年12月4日～）'
  },
  {
    ext: '.gif',
    imgurId: 'k9FnwHw',
    phoneWarning: true,
    summary: 'DiscordのAARRのサーバーバナー（2021年12月5日～）'
  }
];

const openImage = ({ imgurId, ext }: GalleryImage): void => {
  const a = document.createElement('a');

  a.href = `https://i.imgur.com/${imgurId}${ext}`;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';

  a.click();
};

const GalleryPage: FC = () => {
  const [image, setImage] = useState<GalleryImage>();

  return (
    <>
      <Seo
        title='ギャラリー'
        description='コミュニティの画像などを置いています。'
      />
      <CommonDialog
        open={typeof image !== 'undefined'}
        message='この画像は環境によっては重くなる可能性があります'
        confirmButtonText='開きます'
        onCancel={() => {
          setImage(undefined);
        }}
        onConfirm={() => {
          setImage(undefined);

          if (image) {
            openImage(image);
          }
        }}
      />
      <Stack spacing={2} paddingBottom='2rem'>
        <Typography fontSize='small' color='text.secondary'>
          画像をクリック（またはタップ）でオリジナルサイズの画像を開く
        </Typography>
        {images.map(image => {
          const { imgurId, summary, ext, phoneWarning = false } = image;

          return (
            <Card key={`${imgurId}${ext}`}>
              <CardContent>
                <Stack alignItems='flex-start' spacing={1}>
                  <Typography>{summary}</Typography>
                  <Box>
                    <CardActionArea onClick={() => phoneWarning ? setImage(image) : openImage(image)}>
                      <Box
                        sx={{ verticalAlign: 'middle' }}
                        component='img'
                        crossOrigin='anonymous'
                        src={`https://i.imgur.com/${imgurId}b${ext}`}
                      />
                    </CardActionArea>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default GalleryPage;
