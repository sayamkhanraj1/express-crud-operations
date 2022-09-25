const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controlle");

router
  .route("/all")
  .get(userController.getUsers)
  .post(userController.saveAUser);

router.route("/random/:id").get(userController.getRandomUser);
router
  .route("/delete/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteAUser);
module.exports = router;
