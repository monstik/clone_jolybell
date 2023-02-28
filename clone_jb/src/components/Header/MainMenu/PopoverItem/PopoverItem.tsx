import {
  Button,
  ClickAwayListener,
  Grow,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  Popper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopoverData = [
  {
    name: 'Трусы',
    navigateTo: '/category/underpants',
  },
  {
    name: 'Сувениры',
    navigateTo: '/category/souvenirs',
  },
  {
    name: 'Мемы',
    navigateTo: '/category/memes',
  },
];

const PopoverItem = () => {
  const laptop = useMediaQuery('(max-width:1230px)');
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleNavigate = (
    navigateTo: string,
    event: Event | React.SyntheticEvent
  ) => {
    navigate(navigateTo);
    handleClose(event);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box>
      <Button
        id='basic-button'
        ref={anchorRef}
        disableRipple
        // aria-controls={open ? 'basic-menu' : undefined}
        // aria-haspopup='true'
        // aria-expanded={open ? 'true' : undefined}
        onClick={handleToggle}
        sx={{
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          cursor: 'pointer',
          position: 'relative',

          '&:before': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '1px',
            bottom: '0px',
            left: '50%',
            transform: 'translate(-50%,0%)',
            backgroundColor: '#fff',
            transformOrigin: 'center',
            visibility: 'hidden',
            transition: 'all 0.3s ease-in-out',
          },
          '&:hover:bwefore': {
            visibility: 'visible',
            width: '100%',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: laptop ? '13px' : '15px',

            textTransform: 'uppercase',
          }}
        >
          Трусы
        </Typography>
        <Box sx={{ width: '18px', height: '18px', marginLeft: '5px' }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            aria-hidden='true'
            className='chevron'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </Box>
      </Button>
      {/* <Menu
        disableScrollLock
        id='basic-menu'
        elevation={2}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '25px',
            marginTop: '5px',
          },
        }}
      >
        {PopoverData.map((item, index) => (
          <MenuItem
            key={index}
            sx={{
              justifyContent: 'center',
              textTransform: 'uppercase',
              height: '48px',
            }}
            onClick={() => handleNavigate(item.navigateTo)}
          >
            <Typography
              component={'span'}
              sx={{
                fontWeight: '500',
                fontSize: laptop ? '13px' : '15px',
                color: '#000',
              }}
            >
              {item.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu> */}

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom'
        transition
        disablePortal
        sx={{
          paddingTop: '5px',
          zIndex: 10
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                 'top' 
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
                  {PopoverData.map((item, index) => (
                    <MenuItem
                      key={index}
                      sx={{
                        justifyContent: 'center',
                        textTransform: 'uppercase',
                        height: '48px',
                      }}
                      onClick={event => handleNavigate(item.navigateTo, event)}
                    >
                      <Typography
                        component={'span'}
                        sx={{
                          fontWeight: '500',
                          fontSize: laptop ? '13px' : '15px',
                          color: '#000',
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
    </Box>
  );
};

export default PopoverItem;
