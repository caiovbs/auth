import { prisma } from "../../../../database/prismaUser";
export class FindAllUsersUseCase {
    async execute() {
        const user = await prisma.user.findMany();
        return user;
    }
}
