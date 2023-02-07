const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateSingleThought,
  deleteSingleThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateSingleThought)
  .delete(deleteSingleThought);

  // /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId')
.post(createReaction)
.delete(deleteReaction);

module.exports = router;
