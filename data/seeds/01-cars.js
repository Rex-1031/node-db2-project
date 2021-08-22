
// STRETCH
exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
const cars =[
    {
        vin: '1FM5K8F87EGC68775',
        make: 'Toyota',
        model: 'Rav 4',
        mileage: 84000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'WVWNP7AN0BE791043',
        make: 'Scion',
        model: 'Xb',
        mileage: 120000,
        title: 'clean',
    },
    {
        vin: '1G6DW67V180142103',
        make: 'Toyota',
        model: 'Prius',
        mileage: 50000,
    },
]