import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('Abc@1234', 10),
    isAdmin: true,
  },
  {
    name: 'Ahmad Ali',
    email: 'test1@email.com',
    password: bcrypt.hashSync('Abc@1234', 10),
    isAdmin: false,
  },
  {
    name: 'Alex Smith',
    email: 'test2@email.com',
    password: bcrypt.hashSync('Abc@1234', 10),
    isAdmin: false,
  },
  {
    name: 'Malcolm X',
    email: 'test3@email.com',
    password: bcrypt.hashSync('Abc@1234', 10),
    isAdmin: false,
  },
];

export default users;
