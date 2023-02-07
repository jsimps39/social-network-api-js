const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteSingleUser,
  updateUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteSingleUser);

// /api/students/:studentId/
router.route('/:userId/thoughts').post(addAssignment);

// /api/students/:studentId/friends/:friendID
router.route('/:studentId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
