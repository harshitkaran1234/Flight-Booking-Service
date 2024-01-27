const  { Booking } = require('../models');
const CrudRepository = require('./crud-repository');

class BookingRepository extends CrudRepository {
    constructor() {
        super(Booking);
    }

    async createBooking(data, transaction) {
        const response = await Booking.create(data, {transaction: transaction});
        return response;
    }

    async get(data, transaction) {
        console.log('in get');
        const response = await this.model.findByPk(data, {transaction: transaction});
        if(!response) {
            throw new AppError('Cannot find resource', 404);
        }
        return response;
    }

    async update(id, data, transaction) {
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        }, {transaction: transaction});
        return response;
    }
}

module.exports =  BookingRepository;