import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@myshop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Fred Flintsone',
    email: 'fred@myshop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Barney Rubble',
    email: 'barney@myshop.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users