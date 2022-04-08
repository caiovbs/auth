import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { FindAllUsersController } from "./modules/user/useCases/findAllUsers/FindAllUsersController";
const routes = Router()
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const findAllUsersController = new FindAllUsersController()
routes.post('/user', createUserController.handle)
routes.post('/auth', authenticateUserController.handle)
routes.get('/user', findAllUsersController.handle)

export { routes }