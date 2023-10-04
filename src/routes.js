import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import authMiddleware from './app/middlewares/auth'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionControler'
import CategoryController from './app/controllers/CategoryController'
import ProductController from './app/controllers/ProductController'
import OrderController from './app/controllers/OrderController'


const routes = new Router()

const upload= multer(multerConfig)

routes.post('/users', UserController.store )

routes.post('/sessions', SessionController.store )

routes.use(authMiddleware)

routes.post('/products', upload.single('file'), ProductController.store )
routes.get('/products',  ProductController.index )
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store )
routes.get('/categories',  CategoryController.index )
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/Orders', OrderController.store )
routes.get('/Orders', OrderController.index )
routes.put('/Orders/:id', OrderController.update )

export default routes
