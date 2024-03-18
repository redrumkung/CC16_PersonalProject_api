const catchError = require("../utils/catch-error");
const serviceService = require("../services/service-service");



exports.create = catchError(async (req, res, next) => {
    req.body.userId = req.user.id
    req.body.price = +req.body.price
    req.body.available = +req.body.available
    req.body.date = new Date()
  const newTrip = await serviceService.createTrip(req.body);
  res.status(200).json({
    success: true,
    message: "Trip created successfully",
    trip: newTrip,
  });
});

exports.getAllTrips = catchError(async (req, res, next) => {
    const trips = await serviceService.findTrips()
    res.status(200).json({ trips })
})


exports.getTripById = catchError(async (req, res, next) => {
    const  id = req.params.tripId;
    
    const trip = await serviceService.findTripById(id)
    console.log(trip)
    res.status(200).json({ trip })

    if (!trip) {
        const error = new Error(`Trip with id ${id} not found`);
        error.status = 404;
        throw error;
    }
})

exports.deleteTrip = catchError(async (req, res, next) => {
    const tripId = req.params.tripId;
    // console.log(tripId)
    const deletedTrip = await serviceService.deleteTrip(tripId);
    res.status(200).json({
        success: true,
        message: "Trip deleted successfully",
        deletedTrip: deletedTrip,
    });
    
})