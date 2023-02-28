import {
  Backdrop,
  Box,
  Button,
  ClickAwayListener,
  Fade,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CurrencyData = [
  {
    name: 'usd',
    id: 1,
  },
  {
    name: 'eur',
    id: 2,
  },
  {
    name: 'uah',
    id: 3,
  },
];

const Account = () => {
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const [currentCurrency, setCurrentCurrency] = useState(CurrencyData[0].name);

  const [open, setOpen] = React.useState(false);

  const handleClickLanguage = (
    name: string,
    event: Event | React.SyntheticEvent
  ) => {
    setCurrentCurrency(name);
    // handleClose(event);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    // event.stopPropagation();

    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current!.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  return (
    <Box>
      <IconButton
        id='basic-button'
        disableRipple
        ref={anchorRef}
        onClick={handleToggle}
        sx={{
          padding: 0,
          // display: 'flex',
          // alignItems: 'center',
          marginBottom: '10px',
          minWidth: 0,

          // width: '21px',
          // height: '27px',
          // verticalAlign: 'center',

          '& svg': {
            fill: '#fff',
            transition: 'fill .3s',
          },

          '&:hover': {
            '& svg': {
              fill: grey[500],
            },
          },
        }}
      >
        <svg
          className='account'
          width='21px'
          height='21px'
          xmlns='http://www.w3.org/2000/svg'
          // viewBox=''
        >
          <path d='M10.5 0C6.82 0 3.82 3 3.82 6.68c0 2.29 1.16 4.31 2.92 5.52A9.534 9.534 0 00.95 21h1.91c0-4.26 3.37-7.64 7.64-7.64s7.64 3.37 7.64 7.64h1.91c0-3.95-2.37-7.35-5.79-8.8a6.68 6.68 0 002.92-5.52C17.18 3 14.18 0 10.5 0zm0 1.91c2.65 0 4.77 2.13 4.77 4.77s-2.13 4.77-4.77 4.77-4.77-2.12-4.77-4.77 2.12-4.77 4.77-4.77z'></path>
        </svg>
      </IconButton>

      <Fade
        timeout={500}
        in={open}
        style={{
          transformOrigin: 'center',
        }}
      >
        <Backdrop
          // zIndex={10}
          sx={{
            // zIndex: '1000',color: '#fff',
            // color: '#fff',
            zIndex: theme => theme.zIndex.drawer + 10,
            // position: 'absolute'
            // overflow: 'scroll',
            // overflow: 'scroll'
          }}
          open={open}
        >
          {/* <Menu
          open={open}
          onClose={handleClose}
          anchorEl={anchorRef.current}
          hideBackdrop
          sx={{
            '& Backdrop': {
              bgcolor: 'red',
            },
          }}
        >
          <Box
            sx={{
              width: '200px',
              height: '400px',
            }}
          >
            test
          </Box>
        </Menu> */}

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement='bottom'
            transition
            disablePortal
            sx={{
              // overflow: 'hidden',

              width: '100%',
              maxWidth: '366px',
            }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                timeout={500}
                {...TransitionProps}
                style={{
                  transformOrigin: 'center',
                }}
              >
                <Paper
                  sx={{
                    position: 'relative',
                    borderRadius: '15px',
                    ml: 2,
                    mr: { xs: 2, md: 5 },
                    mt: 3.9,
                    bgcolor: '#fff',

                    // maxWidth: '366px',

                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 2,
                      right: 120,
                      width: 30,
                      height: 30,
                      borderRadius: '5px',
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  }}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='composition-menu'
                      aria-labelledby='composition-button'
                      onKeyDown={handleListKeyDown}
                      sx={{
                        width: '100%',
                      }}
                    >
                      {CurrencyData.map((item, index) => (
                        <MenuItem
                          key={index}
                          onClick={event =>
                            handleClickLanguage(item.name, event)
                          }
                        >
                          <Typography
                            component={'span'}
                            sx={{
                              fontWeight: '500',
                              fontSize: '15px',
                              color: '#000',
                              textTransform: 'uppercase',
                            }}
                          >
                            {item.name}
                          </Typography>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Backdrop>
      </Fade>
      {/* <Popper
       
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom'
        transition
        // disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'top',
            }}
          >
            <Paper sx={{ borderRadius: '15px' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={handleListKeyDown}
                >
                  {CurrencyData.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={event => handleClickLanguage(item.name, event)}
                    >
                      <Typography
                        component={'span'}
                        sx={{
                          fontWeight: '500',
                          fontSize: '15px',
                          color: '#000',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper> */}
    </Box>
  );
};

export default Account;
