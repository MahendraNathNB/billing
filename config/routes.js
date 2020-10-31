const express = require('express')
const router = express.Router() 
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const customersController = require('../app/controllers/customersController')
const productsController = require('../app/controllers/productsController')
const billsController = require('../app/controllers/billsController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)

router.get('/customers', authenticateUser, customersController.list)
router.post('/customers', authenticateUser, customersController.create)
router.get('/customers/:id', authenticateUser, customersController.show)
router.put('/customers/:id', authenticateUser, customersController.update)
router.delete('/customers/:id', authenticateUser, customersController.destory)

router.get('/products', authenticateUser, productsController.list)
router.post('/products', authenticateUser, productsController.create)
router.get('/products/:id', authenticateUser, productsController.show)
router.put('/products/:id', authenticateUser, productsController.update)
router.delete('/products/:id', authenticateUser, productsController.destory)

router.get('/bills', authenticateUser, billsController.list)
router.post('/bills', authenticateUser, billsController.create)
router.get('/bills/:id', authenticateUser, billsController.show)
// router.put('/bills/:id', authenticateUser, billsController.update)
router.delete('/bills/:id', authenticateUser, billsController.destory)

module.exports = router 