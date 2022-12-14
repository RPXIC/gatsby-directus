export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () => (isBrowser() && window.localStorage.getItem('gatsbyUser') ? JSON.parse(window.localStorage.getItem('gatsbyUser')) : {})

export const setUser = (user: any) => window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.token
}

export const logout = () => setUser({})
