const express = require('express');
const router = express.Router();

// @Route       POST api/auth
// @Desc        Login a user
// @Access      Public
router.post('/', (req, res)=>{
    res.send('Register a user');
})

router.get('/', (req, res)=>{
    res.send('Register a user');
})

module.exports = router;