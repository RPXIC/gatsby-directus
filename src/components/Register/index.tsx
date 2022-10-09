import { Link } from 'gatsby'
import { Alert, FormControl, Snackbar, InputLabel, TextField, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff, Send } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useRegister } from './useRegister'
import { content, title, formContainer, form } from './register.module.css'

const Register = () => {
  const { state, email, password, showPassword, handleChange, handleSubmit, snackbar, handleClose, handleClickShowPassword, handleMouseDownPassword } =
    useRegister()

  const { open, severity, text } = snackbar
  const { loading } = state

  return (
    <div className={content}>
      <h1 className={title}>Register</h1>
      <div className={formContainer}>
        <form className={form} onSubmit={handleSubmit}>
          <TextField label='Email' id='outlined-start-adornment' value={email} onChange={handleChange('email')} required />
          <FormControl>
            <InputLabel htmlFor='outlined-adornment-password'>Password*</InputLabel>
            <OutlinedInput
              required
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <LoadingButton type='submit' size='small' endIcon={<Send />} loading={loading} loadingPosition='end' variant='contained'>
            Send
          </LoadingButton>
          <Link to='/login'>Login</Link>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
              {text}
            </Alert>
          </Snackbar>
        </form>
      </div>
    </div>
  )
}

export default Register
