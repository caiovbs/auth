import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaUser";

interface IRequest {
    email: string, password: string
}
interface IResponse {
    user: {
        email: string;
    };
    token: string;
}
export class AuthenticateUserUsecase {
    async execute({ email, password }: IRequest) {
        const user = await prisma.user.findFirst({
            where: {
                email: { mode: "insensitive" }
            }
        })

        if (!user) {
            throw new Error('Email or password incorrect');
        }

        const verifyPassword = await compare(password, user.password)
        if (!verifyPassword) {
            throw new Error('Email or password incorrect');
        }
        const token = sign({}, 'cb465623b82c49a46b615b17789548ae', {
            subject: user.id,
            expiresIn: '1d',
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                email: user.email,
            },
        };

        return tokenReturn;
    }
}