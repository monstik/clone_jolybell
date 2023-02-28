import React from 'react';

import { Navigation, Pagination, EffectCards } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css';
// import 'swiper/css/pagination';
import { Box, useMediaQuery } from '@mui/material';

// import './styles.css';
import './ProductSwiperStyles.css';
interface IProductSwiper {
  color: string;
}

const ProductSwiper: React.FC<IProductSwiper> = ({ color }) => {
  const mobile = useMediaQuery('(max-width: 1024px)');

  return (
    <Box
      sx={{
        // width: '100%',  width: '100%',
        width: '100%',
        height: '100%',
        '& .swiper': {
          width: '100%',
          height: '100%',
        },

        '& .swiper-pagination-bullet': {
          position: 'relative',
          height: '12px',
          width: '12px',
          opacity: '1',
          backgroundColor: 'transparent',
          margin: ' 0 15px!important',
        },
        '& .swiper-pagination-bullet::before': {
          content: '""',
          position: 'absolute',
          display: 'block',
          borderRadius: '100em',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '24px',
          height: '24px',
          zIndex: '1',
          border: `2px solid ${color}`,

          alignSelf: 'center',
        },

        '& .swiper-button-next': {
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '9.5px 0 9.5px 10.5px',
          borderColor: `transparent transparent transparent  ${color}`,
          right: '20px',
        },

        '& .swiper-button-prev': {
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '9.5px 10.5px 9.5px 0',
          borderColor: `transparent  ${color} transparent transparent`,
          left: '20px',
        },

        '& .swiper-button-prev::before': {
          borderRadius: '100px',
          position: 'absolute',
          left: '-19px',
          width: '51px',
          height: '51px',
          zIndex: '2',
          content: '""',

          border: `2px solid ${color}`,
        },

        '& .swiper-button-next::before': {
          borderRadius: '100px',
          position: 'absolute',
          right: '-19px',
          width: '51px',
          height: '51px',
          zIndex: '2',
          content: '""',

          border: `2px solid ${color}`,
        },

        '& .swiper-button-next::after': {
          content: '""',
        },
        '& .swiper-button-prev::after': {
          content: '""',
        },
        '& .swiper-pagination-bullet-active': {
          backgroundColor: `${color}!important`,
        },

        // ' & .swiper-button-next, .swiper-button-prev': {
        //   // 'background-color': 'white',
        //   bgcolor: 'red'
        // },

        // ' & .swiper-button-next, .swiper-button-prev ::before': {
        //   // 'background-color': 'white',
        //   content: '""',
        //   position: 'absolute',
        //   display: 'block',
        //   borderRadius: '100px',
        //   // top: '-6px',
        //   // left: '-6px',
        //   width: '24px',
        //   height: '24px',
        //   // zIndex: '1',
        //   border: `2px solid ${color}`,

        //   alignSelf: 'center',
        // },
      }}
    >
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={!mobile}

        // modules={[Pagination]}
      >
        <SwiperSlide>
          <Box
            component={'img'}
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            src={
              'https://cdn.jolybell.com/images/cGNahzAeoJFmDUy.webp?width=492&height=540&quality=90'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            component={'img'}
            src={
              'https://cdn.jolybell.com/images/LSyXeObk9FlRptz.webp?width=491&height=540&quality=90'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            component={'img'}
            src={
              '	https://cdn.jolybell.com/images/4P8heH1duHEpC7S.webp?width=777&height=540&quality=90'
            }
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ProductSwiper;
