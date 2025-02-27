import { PrismaClient } from '@prisma/client';
export const getAll = async () => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.findMany();
};
export const getById = async (id) => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.findUnique({
        where: {
            id
        }
    });
};
export const create = async (data) => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.create({
        data
    });
};
export const update = async (id, data) => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.update({
        where: {
            id
        },
        data
    });
};
export const logicalDelete = async (id) => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.update({
        where: {
            id
        },
        data: {
            isResigned: true
        }
    });
};
