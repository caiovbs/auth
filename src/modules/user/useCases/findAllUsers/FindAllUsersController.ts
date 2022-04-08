import { Request, Response } from "express";
import { FindAllUsersUseCase } from "./FindAllUsersUseCase";
export class FindAllUsersController {
    async handle(request: Request, response: Response) {
        const findAllUsersUseCase = new FindAllUsersUseCase();
        const user = await findAllUsersUseCase.execute();
        return response.json(user);
    }
}