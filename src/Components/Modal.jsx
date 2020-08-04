import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({title,date,client,name,industry,status, price,total}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        More Info
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        {title ? <DialogTitle id="alert-dialog-title"><h1>{title}</h1></DialogTitle> : null }
        {name ? <DialogTitle id="alert-dialog-title"><h1>{name}</h1></DialogTitle> : null}
        
        
        

        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {client ? <h3>This ticket belongs to {client} </h3> : null}
            {status ?  <h3>Status : {status} </h3> :null}
            
            {title ? <p>We are proud to help them with a {title}</p> :  null}
            {industry ? <p>This client comes from the {industry} industry</p> : null}
            {price ? <p>This Product cost is {price} </p>: null}
            {total ? <p>The total sale was {total} </p> : null}
            {date ? (<p>This event happened on {date}</p>) : null}
            
          </DialogContentText>
        </DialogContent>


        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
