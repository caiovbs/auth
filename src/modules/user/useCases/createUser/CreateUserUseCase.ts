import { prisma } from '../../../../database/prismaUser'
import { hash } from 'bcrypt'
interface ICreateUser {
    email: string
    password: string
}
export class CreateUserUseCase {
    async execute({ email, password }: ICreateUser) {
        const userExists = await prisma.user.findFirst({
            where: {
                email: { mode: "insensitive" }
            }
        })

        const hashPassword = await hash(password, 10)
        const userSaved = await prisma.user.create({
            data: {
                email,
                password: hashPassword
            }
        })
        return userSaved
    }
}