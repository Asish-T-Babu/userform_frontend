import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Open_modal(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>Detailed View</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Detailed View
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <React.Fragment>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="Name"
                                            name="Name"
                                            label="Name"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                            inputProps={
                                                { readOnly: true }
                                            }
                                            value={props.data.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="email"
                                            name="email"
                                            label="Email"
                                            fullWidth
                                            variant="standard"
                                            inputProps={
                                                { readOnly: true }
                                            }
                                            value={props.data.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="cname"
                                            name="cname"
                                            label="Company Name"
                                            fullWidth
                                            variant="standard"
                                            inputProps={
                                                { readOnly: true }
                                            }
                                            value={props.data.cname}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address2"
                                            name="address2"
                                            label="Address line"
                                            fullWidth
                                            variant="standard"
                                            inputProps={
                                                { readOnly: true }
                                            }
                                            value={props.data.address}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            variant="standard"
                                            inputProps={
                                                { readOnly: true }
                                            }
                                            value={props.data.city}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="state"
                                            name="state"
                                            label="State/Province/Region"
                                            fullWidth
                                            variant="standard"
                                            inputProps={
                                                { readOnly: true }
                                            }
                                            value={props.data.state}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                            variant="standard"
                                            inputProps={
                                                { readOnly: true }
                                            }
                                            value={props.data.country}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="pno"
                                            name="pno"
                                            label="Phone Number"
                                            fullWidth
                                            variant="standard"
                                            inputProps={
                                                { readOnly: true }
                                            }
                                            value={props.data.pnumber}
                                        />
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button variant="contained" onClick={handleClose} sx={{ mt: 3, ml: 1 }}>{'Close'}</Button>
                                </Box>
                            </React.Fragment>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default Open_modal