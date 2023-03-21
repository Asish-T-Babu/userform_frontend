import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'

function Register() {
    let navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const[photo,setPhoto]=useState()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSubmits = (e) => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("country", country)
        formData.append("phone", phone)
        formData.append("photo", photo)
        axios.post('http://127.0.0.1:8000/________', formData).then((response) => {
            console.log(response.data)
            setName('')
            setEmail('')
            setCountry('')
            setPhone('')
        }).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        {...register('name', { required: true })}
                        value={name} onChange={(e) => { setName(e.target.value) }}
                    />
                    {errors.name && <span>This field is required</span>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        variant="standard"
                        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span>This field is required</span>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        variant="standard"
                        {...register('country', { required: true })}
                        value={country} onChange={(e) => setCountry(e.target.value)}
                    />
                    {errors.country && <span>This field is required</span>}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        fullWidth
                        variant="standard"
                        {...register('phone', { required: true })}
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <span>This field is required</span>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <input type="file" onChange={(e) => { setPhoto(e.target.files[0]) }} />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={handleSubmit((e) => handleSubmits(e))} sx={{ mt: 3, ml: 1 }}>{'Next'}</Button>
            </Box>
        </React.Fragment>
    )
}

export default Register
