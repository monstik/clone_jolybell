import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';

const LanguageData = [
  {
    name: 'ENG',
    id: 1,
  },
  {
    name: 'RUS',
    id: 2,
  },
  {
    name: 'UKR',
    id: 3,
  },
];

const Language = () => {
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const [currentLanguage, setCurrentLanguage] = useState(LanguageData[0].name);

  const [open, setOpen] = React.useState(false);
  const id = open ? 'simple-popover' : undefined;

  const handleClickLanguage = (
    name: string,
    event: Event | React.SyntheticEvent
  ) => {
    setCurrentLanguage(name);
    handleClose(event);
  };

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

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box
      
    >
      <Button
        ref={anchorRef}
        id='basic-button'
        disableRipple
        onClick={handleToggle}
        sx={{
          padding: 0,

          minWidth: 0,

          color: '#fff',
          transition: 'color .3s',

          '&:hover': {
            color: grey[500],
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            textTransform: 'uppercase',
          }}
        >
          {currentLanguage}
        </Typography>
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom'
        transition
        sx={
          {
          
     zIndex: '10000',
          }
        }
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
                  {LanguageData.map((item, index) => (
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

export default Language;
