import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"]});

const main = async () => {
    await prisma.user.deleteMany();
    const users = await prisma.user.create({
        data: {
            name: "Pasha",
            age: 12,
            email: "pasha@pasha.com",
            userPreference: {
                create: {
                    emailUpdates: true,
                }
            },
        },
        // include: {
        //     userPreference: true,
        // },
        select: {
            name: true,
            userPreferenceId: true,
        }
    });
    console.log(users);


};

main()
    .catch((e) => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
