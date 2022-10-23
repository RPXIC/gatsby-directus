const URL = process.env.DIRECTUS_URL
const TOKEN = process.env.DIRECTUS_TOKEN
const VIEWER_ID = process.env.VIEWER_ID

export const register = async ({ email, password }: { email: string; password: string }) => {
  try {
    const res = await fetch(`${URL}/users`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password, role: { id: VIEWER_ID } })
    })
    const data = await res.json()
    return { data, res }
  } catch (error: any) {
    console.log(error)
    return { data: {}, error }
  }
}
