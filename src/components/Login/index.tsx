import { Link } from 'gatsby'
import { Alert, FormControl, Snackbar, InputLabel, TextField, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff, Send } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useLogin } from './useLogin'
import { content, title, formContainer, form } from './login.module.css'

const Login = () => {
  const { state, email, password, showPassword, handleChange, handleSubmit, snackbar, handleClose, handleClickShowPassword, handleMouseDownPassword } =
    useLogin()

  const { open, severity, text } = snackbar
  const { loading } = state

  return (
    <div className={content}>
      <h1 className={title}>Login</h1>
      <div className={formContainer}>
        <form className={form} onSubmit={handleSubmit}>
          <TextField data-cy='email-input-login' label='Email' id='outlined-start-adornment' value={email} onChange={handleChange('email')} required />
          <FormControl>
            <InputLabel htmlFor='outlined-adornment-password'>Password*</InputLabel>
            <OutlinedInput
              required
              id='outlined-adornment-password'
              data-cy='password-input-login'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    data-cy='show-password-login'
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <LoadingButton data-cy='submit-login' type='submit' size='small' endIcon={<Send />} loading={loading} loadingPosition='end' variant='contained'>
            Send
          </LoadingButton>
          <Link to='/register'>Register</Link>
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

export default Login
