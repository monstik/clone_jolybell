import { Button, Dialog, Grow, Slide, Zoom } from '@mui/material';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';

export interface ICaringThingDialog {
 open: boolean;
 onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Zoom  ref={ref} {...props} />;
});

const CaringThingDialog: React.FC<ICaringThingDialog> = ({ open, onClose }) => {
 const handleClose = () => {
  onClose();
 };
 return (
  <Dialog  TransitionComponent={Transition}  onClose={handleClose} open={open}>
   <Button onClick={handleClose}>test</Button>
  </Dialog>
 );
};

export default CaringThingDialog;
