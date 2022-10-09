import { navigate } from 'gatsby'
import { ChangeEvent, FormEvent, MouseEvent, SyntheticEvent, useState } from 'react'
import { register } from 'services/register'
import { Snackbar, State, Values } from './types'

export const useRegister = () => {
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
    const { data, res } = await register({ email, password })
    setState({ ...state, loading: false })

    if (res?.ok && res.status === 200) {
      setSnackbar({ open: true, text: 'User Registered', severity: 'success' })
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
