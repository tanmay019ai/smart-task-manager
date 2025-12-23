const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task.controller');
const authCtrl = require('../controllers/auth.controller');

router.use(authCtrl.authenticate);

router.post('/', taskCtrl.createTask);
router.get('/', taskCtrl.getTasks);
router.put('/:id', taskCtrl.updateTask);
router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;
