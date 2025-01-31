// Get login token from localhost:3001/login

const response = await fetch('http://localhost:3001/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username: 'mario@example.com', password: 'mario' }),
})

const data = await response.json()
console.log(data)
