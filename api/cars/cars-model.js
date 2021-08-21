const db = require('../../data/db-config')

const getAll = async () => {
  return db('cars')
}

const getById = async() => {
  return db('cars').where('id', id).first
}

const create = async() => {
  const [id] = await db('cars').insert(cars)
  return getById(id)
}
module.exports = {
  getAll,
  getById,
  create
}