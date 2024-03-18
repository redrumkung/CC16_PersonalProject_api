const prisma = require("../models/prisma");

// exports.findUserByEmail = (email) =>
//   prisma.user.findFirst({
//     where: {
//       email: email,
//     },
//   });

exports.createTrip = (data) => prisma.trip.create({ data });

exports.findTrips = async() => {

    const trips = await prisma.trip.findMany(
        {
            include: {user: true}
        }
    )

    return trips    
}

exports.findTripById = async (tripId) => {
    if (!tripId) {
        throw new Error('ID is required');
    }
    console.log(tripId)
    const trip = await prisma.trip.findUnique({
        where: {
            id: parseInt(tripId)
        },
        include: {
            user: true
        }
    });

    return trip;
};

exports.deleteTrip = async(tripId) => {
    const tripIdInt = parseInt(tripId, 10)
        const deleteTrip = await prisma.trip.delete({
            where: {
                id: tripIdInt,
            },
        })
        return deleteTrip
} 

// exports.findUserById = id => prisma.user.findUnique({ where: { id }})

// exports.updateUserById = (data, id) =>
//   prisma.user.update({ data, where: { id } });