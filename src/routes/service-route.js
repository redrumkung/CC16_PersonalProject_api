const express = require('express');

const serviceController = require('../controllers/service-controllers');


const router = express.Router();

router.post('/create', serviceController.create);
// router.patch('/edit', serviceController.updateTrip);
router.get('/trips', serviceController.getAllTrips)
router.get('/trips/:tripId',serviceController.getTripById)
router.delete('/delete/:tripId', serviceController.deleteTrip)
// router.patch('/edit', serviceController.updateTrip)

module.exports = router;