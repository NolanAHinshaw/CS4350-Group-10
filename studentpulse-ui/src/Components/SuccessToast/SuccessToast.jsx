// IMPORTS ---------------------------------------------------------------------------------------------------------------
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


// MAIN DASHBOARD PAGE FUNCTION -------------------------------------------------------------------------------------------------
function SuccessToast({open, setOpen, message}){

    const handleAlertClose = (evt) => {
        setOpen(false);
      };

    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleAlertClose}>
            <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}


export default React.memo(SuccessToast);