import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Doru Dia',
    email: 'dorudia@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ella Dia',
    email: 'ella@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;