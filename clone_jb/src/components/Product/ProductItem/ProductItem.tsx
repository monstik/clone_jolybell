import { Box, Button, Typography, useMediaQuery } from '@mui/material';

import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { changeIsDark } from '../../../features/product/productSlice';

interface IProductItem {
  dark?: boolean;
} 

const ProductItem: React.FC<IProductItem> = ({ dark = false }) => {
  const [active, setActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const mobile = useMediaQuery('(max-width: 480px)');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(changeIsDark(dark));

    navigate('/product/1');
  
  }

  return (
    <Box
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={onClickHandler}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '35px 17.5px',
        WebkitFilter: 'drop-shadow(0 0 20px rgba(0,60,120,.08))',
        width: mobile
          ? '90vw'
          : {
              xs: '430px',
              sm: 'calc(43.75vw - 17.5px)',
              md: '430px',
              lg: 'calc(28.33333vw - 23.33333px)',
              xl: '430px',
            },
        filter: 'drop-shadow(0 0 20px rgba(0,60,120,.08))',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          borderRadius: '29px',
          //   WebkitFilter: 'drop-shadow(0 0 20px rgba(0,60,120,.06))',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          contain: 'strict',

          height: mobile
            ? '94.1860465116vw'
            : {
                xs: '450px',
                sm: 'calc(45.78488vw - 18.31395px)',
                md: '450px',
                lg: 'calc(29.65116vw - 24.4186px)',
                xl: '450px',
              },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bgcolor: active ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
            width: '100%',
            height: '100%',
            borderRadius: '29px',
            transition: 'background-color .5s ease',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              width: 'max-content',
              alignItems: 'center',
              borderRadius: ' 0 0 1em 0',
              padding: '0 1em',
              height: '2em',
              bgcolor: '#000',
              color: '#fff',
              fontSize: mobile
                ? '5.023255814vw'
                : {
                    xs: '24px',
                    sm: 'calc(2.44186vw - .97674px)',
                    md: '24px',
                    lg: 'calc(1.5814vw - 1.30233px)',
                    xl: '24px',
                  },
            }}
          >
            <Typography
              component={NumberFormat}
              displayType='text'
              value={'1375'}
              thousandSeparator={' '}
              fontSize={'inherit'}
              fontWeight={500}
            />

            <Typography fontSize={'inherit'} fontWeight={500}>
              &nbsp;UAH
            </Typography>
          </Box>
          <Button
            variant='contained'
            onMouseEnter={() => setButtonActive(true)}
            onMouseLeave={() => setButtonActive(false)}
            // onClick={() => navigate('/product/1')}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '50%',
              transform: 'translate(50%, -50%)',

              width: '220px',
              height: '50px',
              bgcolor: '#fff',
              borderRadius: '100px',
              color: '#000',

              opacity: active ? 1 : 0,
              transition: 'opacity .3s ease',
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            <Typography
              fontSize={'15px'}
              sx={{
                marginTop: '3px',
                lineHeight: 1,
              }}
            >
              Подробнее
            </Typography>
            <ArrowForwardIcon
              fontSize='small'
              sx={{
                transition: 'transform .5s ease',

                transform: buttonActive
                  ? 'translate(35px, 0)'
                  : 'translate(15px, 0)',
              }}
            />
          </Button>
        </Box>
        <Box
          sx={{
            // position: 'relative',
            // zIndex: 7,
            margin: 'auto 10px',

            // margin: '70px 0 0 0',

            // marginBottom: '10px'
          }}
        >
          <Box
            component={'img'}
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              WebkitMaskImage: '-webkit-radial-gradient(#fff,#000)',
              //   marginTop: '30px'
              paddingTop: '30px',
            }}
            src={
              'https://cdn.jolybell.com/images/uJEOk84sKGmLvQN.webp?width=387&height=360&quality=85'
            }
          ></Box>
        </Box>
      </Box>

      <Button
        variant='text'
        sx={{
          marginTop: '20px',
          width: '100%',
          transition: 'background-color .5s ease',
          borderRadius: '100px',
          bgcolor: active ? '#000' : '#fff',
          border: '2px solid #f1f3f5',
          textTransform: 'none',
          color: '#fff',
          '&:hover': {
            bgcolor: active ? '#000' : '#fff',
          },
        }}
      >
        <Typography
          fontSize={18}
          fontWeight={300}
          sx={{
            transition: 'color 0.5s ease',
            color: active ? '#fff' : '#000',
          }}
        >
          Кофта черная
        </Typography>
      </Button>
    </Box>
  );
};

export default ProductItem;
