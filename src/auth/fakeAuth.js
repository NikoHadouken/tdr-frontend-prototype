const users = [
  {
    email: 'john.doe@example.com',
    password: '12345',
    name: 'John Doe',
    roles: ['USER'],
  },
]

export default {
  login: ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = users.find(
          (u) => u.email === email && u.password === password
        )
        if (!userData) {
          reject(new Error('email/password incorrect'))
        } else {
          // eslint-disable-next-line no-unused-vars
          const { password: _pw, ...user } = userData
          resolve(user)
        }
      }, 1000)
    })
  },
  logout: () => {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    })
  },
}
