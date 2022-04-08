import { Request, Response } from 'express';

import { AuthenticateUserUsecase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;
        const authenticateUserUseCase = new AuthenticateUserUsecase();

        const token = await authenticateUserUseCase.execute({
            password,
            email,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };
