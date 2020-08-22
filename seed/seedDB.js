const mongoose = require("mongoose");
const Room = require("../models/roomModel");
const User = require("../UserClass")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const newRoom = [{
  hostId: "1",
  roomName: "Terror Dome"
}, {
  hostId: "2",
  roomName: "myRoom"
}]

// newRoom.forEach(element => {
//   const room = new Room(element)
//   const newUser = new User("eddy", "myRoom", "myid")
//   room.addUser(newUser)
//   Room.create(room).then(data => console.log(data)).catch(err => {
//     console.error(err);
//     process.exit(1);
//   })
// });


Room.find({}).then(data => console.log("findAll: ", data))


