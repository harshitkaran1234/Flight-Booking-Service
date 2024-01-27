const { BookingService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createBooking(req, res) {
    try{
        const response = await BookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noOfSeats: req.body.noOfSeats,
        })
        SuccessResponse.data = response;
        return res.status(200).json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse);
    }
}

async function makePayment(req, res) {
    try{
        const response = await BookingService.makePayment({
            totalCost: req.body.totalCost,
            userId: req.body.userId,
            bookingId: req.body.bookingId,
        })
        SuccessResponse.data = response;
        return res.status(200).json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse);
    }
}

module.exports = {
    createBooking,
    makePayment,
};