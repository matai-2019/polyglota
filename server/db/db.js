const connection = require('./connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

function hashPassword (plainPassword) {
  return bcrypt.hash(plainPassword, saltRounds)
    .then(function (hash) {
      return hash
    })
}

function getUsers (db = connection) {
  return db('users')
}

function getUser (id, db = connection) {
  return db('users')
    .where('users.id', id)
    .first()
    .select()
}

async function addUser (user, db = connection) {
  const hashedUser = { ...user, password: await hashPassword(user.password) }
  return db('users')
    .insert(hashedUser)
}

function addProfile (user, db = connection) {
  return db('profiles')
    .insert({
      userId: user.userId,
      name: user.name,
      password: user.password
    })
}

function login (loginData, db = connection) {
  return db('users')
    .select()
    .where('password', loginData.password)
    .where('email', loginData.email)
    .first()
}

function deleteUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .del()
}

function updateuser (users, db = connection) {
  return db('users')
    .where('users', users.id)
    .update({
    users: user.id,
    password: user.password

    })
}

function deleteProfile (id, db = connection) {
  return db('profiles')
    .where('id', id)
    .del()
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  addProfile,
  login,
  deleteUser,
  hashPassword,
  updateuser,
  deleteProfile
}

