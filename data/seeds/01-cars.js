
// STRETCH
exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
const cars =[
    {
        vin: '11111111111111111',
        make: 'Toyota',
        model: 'Rav 4',
        mileage: 84000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '22222222222222222',
        make: 'Scion',
        model: 'Xb',
        mileage: 120000,
        title: 'clean',
    },
    {
        vin: '33333333333333333',
        make: 'Toyota',
        model: 'Prius',
        mileage: 50000
    },
]