const express = require('express');
const router = express.Router();
const { getTasks, createTask, deleteTask, updateTask } = require('../controllers/taskController'); // Import updateTask
const { protect, authorize } = require('../middlewares/authMiddleware');

// Apply 'protect' to all routes below
router.route('/')
  .get(protect, getTasks)
  .post(protect, createTask);

// Only Admins or Owners can delete
// Update and Delete require ID
router.route('/:id')
  .put(protect, updateTask)    // <--- Add this line
  .delete(protect, deleteTask);

module.exports = router;