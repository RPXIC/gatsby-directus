const TOKEN = process.env.DIRECTUS_TOKEN

export const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const res = await fetch('http://0.0.0.0:8055/auth/login', {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    return { data, res }
  } catch (error: any) {
    console.log(error)
    return { data: {}, error }
  }
}
