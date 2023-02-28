import { Button, Dialog, DialogTitle, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const DialogMenu = () => {
      const [open, setOpen] = React.useState(false);
       const laptop = useMediaQuery('(max-width:1230px)');

        const handleClickOpen = () => {
          setOpen(true);
        };

        const handleClose = () => {
          setOpen(false);
        };

  return (
    <Box>
      <Button
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
          '&:hover:before': {
            visibility: 'visible',
            width: '100%',
          },
        }}
        disableRipple
        onClick={handleClickOpen}
      >
       
        <Typography
          component={'span'}
          sx={{
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: laptop ? '13px' : '15px',
          }}
        >
          Ваш заказ
        </Typography>
      </Button>
      <Dialog
        maxWidth={'xs'}
        fullWidth={true}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Ваш заказ</DialogTitle>
      </Dialog>
    </Box>
  );
}

export default DialogMenu