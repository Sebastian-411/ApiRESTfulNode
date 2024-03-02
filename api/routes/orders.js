const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order were fetch'
    });
})


router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
})


router.get('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.productId
    });
})



router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Order delete',
        orderId: req.params.productId
    });
})


module.exports = router;