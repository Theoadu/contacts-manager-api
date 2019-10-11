const express = require('express');
const router = express.Router();

// @Route       POST api/users
// @Desc        Registers new user
// @Access      Public
router.post('/', (req, res)=>{
    res.send('Register a user');
})

router.get('/', (req, res)=>{
    res.send('Get all users')
})
module.exports = router;