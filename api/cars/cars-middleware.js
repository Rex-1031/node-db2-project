const Cars = require('./cars-model')
const vinValidator = require('vin-validator')
const db = require('../../data/db-config')




const checkCarId = async(req, res, next) => {
  try{
    const carId = await Cars.getById(req.param.id)
    if(!carId){
      res.status(404).json({
        message: `car with id ${carId} is not found`
      })
    }else{
      next()
    }
  }
  catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const {vin, make, model, mileage, title, transmission} = req.body
  if(!vin || !make || !model ||!mileage || !title || !transmission){
    res.status(400).json({
      message: `${req.body} is missing`
    })
  }else{
    next()
  }
}

const checkVinNumberValid = async (req, res, next) => {
  try{
    const carVinNumber = await db('cars').where('vin', req.body.vin)
    const isValidVin = vinValidator.validate(carVinNumber)
    if(isValidVin === false){
      res.status(400).json({
        message: `vin ${carVinNumber} is invalid `
      })
    }else{
      next()
    }
  }
  catch(err){
    next(err)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const carVinNumber = await db('cars').where('vin', req.body.vin)
    if(carVinNumber){
      res.status(400).json({
        message: `vin ${carVinNumber} already exists`
      })
    }
    else(next)
  }
  catch(err){
    next(err)
  }
}

module.exports={
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}