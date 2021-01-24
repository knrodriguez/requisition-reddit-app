const router = require('express').Router();

router.use('/posts', require('./posts'));
router.use('/requisitions', require('./requisitions'));
router.use('/reddit', require('./reddit'));
router.use('/users', require('./users'));

router.use((req,res,next) => {
    const err = new Error('Cannot Find This Page!');
    err.status = 404;
    next(err);
})

module.exports = router;