const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/students/:studentId/
//router.route('/:userId/thoughts').post(addThought);

// /api/students/:studentId/friends/:friendID
//router.route('/:studentId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
