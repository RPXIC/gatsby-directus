export interface Values {
  email: string
  password: string
  showPassword: boolean
}

export interface State {
  data: any
  loading: boolean
}

export interface Snackbar {
  open: boolean
  severity: 'error' | 'warning' | 'info' | 'success'
  text: string
}
