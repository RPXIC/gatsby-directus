import { navigate } from 'gatsby'
import { ChangeEvent, FormEvent, MouseEvent, SyntheticEvent, useState } from 'react'
import { login } from 'services/login'
import { setUser } from 'services/auth'
import { Snackbar, State, Values } from './types'

export const useLogin = () => {
  const [state, setState] = useState<State>({
    data: {},
    loading: false
  })
  const [values, setValues] = useState<Values>({
    email: '',
    password: '',
    showPassword: false
  })
  const [snackbar, setSnackbar] = useState<Snackbar>({
    open: false,
    severity: 'success',
    text: ''
  })

  const { email, password, showPassword } = values

  const handleChange = (prop: keyof Values) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    setState({ ...state, loading: true })
    const { data, res } = await login({ email, password })
    setState({ ...state, loading: false })

    if (res?.ok && res.status === 200) {
      setSnackbar({ open: true, text: 'User Logged', severity: 'success' })
      setUser({ token: data.data.access_token, email })
      navigate('/')
    } else {
      setSnackbar({ open: true, text: data.errors[0].message, severity: 'error' })
    }
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault()

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    setSnackbar({ open: false, text: '', severity: 'success' })
  }

  return {
    state,
    snackbar,
    email,
    password,
    showPassword,
    handleChange,
    handleSubmit,
    handleClose,
    handleClickShowPassword,
    handleMouseDownPassword
  }
}
