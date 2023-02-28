import React from 'react';

import { Navigation, Autoplay } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css';
// import 'swiper/css/pagination';
import { Box, Typography } from '@mui/material';

// import './styles.css';
import '../ProductSwiper/ProductSwiperStyles.css';
import NumberFormat from 'react-number-format';

interface IRecomendations {
 isDark: boolean;
}
const Recomendations: React.FC<IRecomendations> = ({ isDark }) => {
 return (
  <Box
   sx={{
    // width: '100%',  width: '100%',
    // width: '100%',
    // height: '100%',
    '& .swiper': {
     width: '100%',
     height: '100%',
    },

    '& .swiper-pagination-bullet': {
     position: 'relative',
     height: '12px',
     wIdth: '12px',
     opacity: '1',
     backgroundColor: 'transparent',
     margin: ' 0 15px!important',
    },
    // '& .swiper-pagination-bullet::before': {
    //   content: '""',
    //   position: 'absolute',
    //   display: 'block',
    //   borderRadius: '100em',
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%, -50%)',
    //   width: '24px',
    //   height: '24px',
    //   zIndex: '1',
    //   border: `2px solid ${color}`,

    //   alignSelf: 'center',
    // },

    // '& .swiper-button-next': {
    //   width: 0,
    //   height: 0,
    //   borderStyle: 'solid',
    //   borderWidth: '9.5px 0 9.5px 10.5px',
    //   borderColor: `transparent transparent transparent  ${color}`,
    //   right: '20px',
    // },

    // '& .swiper-button-prev': {
    //   width: 0,
    //   height: 0,
    //   borderStyle: 'solid',
    //   borderWidth: '9.5px 10.5px 9.5px 0',
    //   borderColor: `transparent  ${color} transparent transparent`,
    //   left: '20px',
    // },

    // '& .swiper-button-prev::before': {
    //   borderRadius: '100px',
    //   position: 'absolute',
    //   left: '-19px',
    //   width: '51px',
    //   height: '51px',
    //   zIndex: '2',
    //   content: '""',

    //   border: `2px solid ${color}`,
    // },

    // '& .swiper-button-next::before': {
    //   borderRadius: '100px',
    //   position: 'absolute',
    //   right: '-19px',
    //   width: '51px',
    //   height: '51px',
    //   zIndex: '2',
    //   content: '""',

    //   border: `2px solid ${color}`,
    // },

    // '& .swiper-button-next::after': {
    //   content: '""',
    // },
    // '& .swiper-button-prev::after': {
    //   content: '""',
    // },
    // '& .swiper-pagination-bullet-active': {
    //   backgroundColor: `${color}!important`,
    // },

    '.swiper-slide': {
     display: 'flex',
     justifyContent: 'center',
    },

    ' & .swiper-button-next, .swiper-button-prev': {
     // 'background-color': 'white',
     color: isDark ? '#fff' : '#000',
     top: '45%',

     // bgcolor: 'red'
    },

    ' & .swiper-button-next::after, .swiper-button-prev::after': {
     // 'background-color': 'white',
     fontWeight: 800,
     fontSize: '35px',
     // bgcolor: 'red'
    },

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
    speed={1000}
    breakpoints={{
     480: {
      slidesPerView: 1,
     },
     768: {
      slidesPerView: 2,
     },
     1024: {
      slidesPerView: 3,
     },
     1280: {
      slidesPerView: 4,
     },
     1600: {
      slidesPerView: 5,
     },
    }}
    // slidesPerView={desktop ? 5 : laptop ? 4 : tablet ? 3 : mobileL ? 2 : 1}
    // spaceBetween={30}
    // pagination={{ clickable: true }}
    // slidesPerGroupAuto
    autoplay={{
     delay: 4500,
     disableOnInteraction: false,
    }}
    loop={true}
    modules={[Autoplay, Navigation]}
    // centeredSlides={true}
    navigation

    // modules={[Pagination]}
   >
    <SwiperSlide>
     <Box
      sx={{
       width: '226px',
       height: '230px',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'space-between',

		cursor: 'pointer',
       '&:hover': {
        opacity: '.7',
        transition: 'opacity .2s',
       },
      }}
     >
      <Box
       sx={{
        height: '149px',
       }}
      >
       <Box
        sx={{
         display: 'block',
         height: '142px',
         width: '100%',
         objectFit: 'contain',
        }}
        component={'img'}
        src={
         'https://cdn.jolybell.com/images/uJEOk84sKGmLvQN.webp?width=169&height=142&quality=70'
        }
       />
      </Box>
      <Box
       sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',

        bgcolor: isDark ? '#fff' : '#000',
        color: isDark ? '#000' : '#fff',
        padding: '0px 14px',
        height: '2em',
        borderRadius: '100px',
       }}
      >
       <Typography
        component={NumberFormat}
        displayType={'text'}
        thousandSeparator={' '}
        value={1320}
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       />
       <Typography
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       >
        &nbsp;UAH
       </Typography>
      </Box>
      <Box
       sx={{
        fontSize: '15px',
        textAlign: 'center',
        color: isDark ? '#fff' : '#000',
        letterSpacing: '.07em',
       }}
      >
       JOLY.SHOT Tryapka1
      </Box>
     </Box>
    </SwiperSlide>

    <SwiperSlide>
     <Box
      sx={{
       width: '226px',
       height: '230px',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'space-between',
       cursor: 'pointer',
       '&:hover': {
        opacity: '.7',
        transition: 'opacity .2s',
       },
      }}
     >
      <Box
       sx={{
        height: '149px',
       }}
      >
       <Box
        sx={{
         display: 'block',
         height: '142px',
         width: '100%',
         objectFit: 'contain',
        }}
        component={'img'}
        src={
         'https://cdn.jolybell.com/images/uJEOk84sKGmLvQN.webp?width=169&height=142&quality=70'
        }
       />
      </Box>

      <Box
       sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',

        bgcolor: isDark ? '#fff' : '#000',
        color: isDark ? '#000' : '#fff',
        padding: '0px 14px',
        height: '2em',
        borderRadius: '100px',
       }}
      >
       <Typography
        component={NumberFormat}
        displayType={'text'}
        thousandSeparator={' '}
        value={1320}
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       />
       <Typography
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       >
        &nbsp;UAH
       </Typography>
      </Box>
      <Box
       sx={{
        fontSize: '15px',
        textAlign: 'center',
        color: isDark ? '#fff' : '#000',
        letterSpacing: '.07em',
       }}
      >
       JOLY.SHOT Tryapka
      </Box>
     </Box>
    </SwiperSlide>

    <SwiperSlide>
     <Box
      sx={{
       width: '226px',
       height: '230px',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'space-between',
       cursor: 'pointer',
       '&:hover': {
        opacity: '.7',
        transition: 'opacity .2s',
       },
      }}
     >
      <Box
       sx={{
        height: '149px',
       }}
      >
       <Box
        sx={{
         display: 'block',
         height: '142px',
         width: '100%',
         objectFit: 'contain',
        }}
        component={'img'}
        src={
         'https://cdn.jolybell.com/images/uJEOk84sKGmLvQN.webp?width=169&height=142&quality=70'
        }
       />
      </Box>

      <Box
       sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',

        bgcolor: isDark ? '#fff' : '#000',
        color: isDark ? '#000' : '#fff',
        padding: '0px 14px',
        height: '2em',
        borderRadius: '100px',
       }}
      >
       <Typography
        component={NumberFormat}
        displayType={'text'}
        thousandSeparator={' '}
        value={1320}
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       />
       <Typography
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       >
        &nbsp;UAH
       </Typography>
      </Box>
      <Box
       sx={{
        fontSize: '15px',
        textAlign: 'center',
        color: isDark ? '#fff' : '#000',
        letterSpacing: '.07em',
       }}
      >
       {' '}
       JOLY.SHOT Tryapka
      </Box>
     </Box>
    </SwiperSlide>

    <SwiperSlide>
     <Box
      sx={{
       width: '226px',
       height: '230px',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'space-between',
       cursor: 'pointer',
       '&:hover': {
        opacity: '.7',
        transition: 'opacity .2s',
       },
      }}
     >
      <Box
       sx={{
        height: '149px',
       }}
      >
       <Box
        sx={{
         display: 'block',
         height: '142px',
         width: '100%',
         objectFit: 'contain',
        }}
        component={'img'}
        src={
         'https://cdn.jolybell.com/images/uJEOk84sKGmLvQN.webp?width=169&height=142&quality=70'
        }
       />
      </Box>

      <Box
       sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',

        bgcolor: isDark ? '#fff' : '#000',
        color: isDark ? '#000' : '#fff',
        padding: '0px 14px',
        height: '2em',
        borderRadius: '100px',
       }}
      >
       <Typography
        component={NumberFormat}
        displayType={'text'}
        thousandSeparator={' '}
        value={1320}
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       />
       <Typography
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       >
        &nbsp;UAH
       </Typography>
      </Box>
      <Box
       sx={{
        fontSize: '15px',
        textAlign: 'center',
        color: isDark ? '#fff' : '#000',
        letterSpacing: '.07em',
       }}
      >
       JOLY.SHOT Tryapka
      </Box>
     </Box>
    </SwiperSlide>

    <SwiperSlide>
     <Box
      sx={{
       width: '226px',
       height: '230px',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'space-between',
       cursor: 'pointer',
       '&:hover': {
        opacity: '.7',
        transition: 'opacity .2s',
       },
      }}
     >
      <Box
       sx={{
        height: '149px',
       }}
      >
       <Box
        sx={{
         display: 'block',
         height: '142px',
         width: '100%',
         objectFit: 'contain',
        }}
        component={'img'}
        src={
         'https://cdn.jolybell.com/images/uJEOk84sKGmLvQN.webp?width=169&height=142&quality=70'
        }
       />
      </Box>

      <Box
       sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',

        bgcolor: isDark ? '#fff' : '#000',
        color: isDark ? '#000' : '#fff',
        padding: '0px 14px',
        height: '2em',
        borderRadius: '100px',
       }}
      >
       <Typography
        component={NumberFormat}
        displayType={'text'}
        thousandSeparator={' '}
        value={1320}
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       />
       <Typography
        sx={{
         fontSize: '13px',
         fontWeight: 600,
         letterSpacing: '.07em',
        }}
       >
        &nbsp;UAH
       </Typography>
      </Box>
      <Box
       sx={{
        fontSize: '15px',
        textAlign: 'center',
        color: isDark ? '#fff' : '#000',
        letterSpacing: '.07em',
       }}
      >
       JOLY.SHOT Tryapka5
      </Box>
     </Box>
    </SwiperSlide>
   </Swiper>
  </Box>
 );
};

export default Recomendations;
