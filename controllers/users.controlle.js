const userApi = require("./../userApi.json");
// Get a random user
const getRandomUser = (req, res) => {
  const { id } = req.params;
  const getUser = userApi.find((user) => user.id === Number(id));
  res.json(getUser);
};
//Get all users & using query parameter
const getUsers = (req, res) => {
  const { limit } = req.query;
  res.json(userApi.slice(0, limit));
};
//Save a user in json
const saveAUser = (req, res) => {
  userApi.push(req.body);
  res.send(userApi);
};
// Update a random user
const updateUser = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const newUser = userApi.find((user) => user.id == Number(id));
  newUser.id = id;
  newUser.name = req.body.name;
  newUser.gender = req.body.gender;
  newUser.contact = req.body.contact;
  newUser.address = req.body.address;
  newUser.photoUrl = req.body.photoUrl;
  res.send(newUser);
};
// delete a user
const deleteAUser = (req, res) => {
  const {id} = req.params;
  const deleteUser = userApi.filter(user => user.id !== Number(id))
  res.send(deleteUser);
};
module.exports = {
  getUsers,
  getRandomUser,
  saveAUser,
  updateUser,
  deleteAUser,
};
