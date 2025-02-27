import { Prisma, PrismaClient, Staff } from '@prisma/client';

export const getAll = async (): Promise<Staff[]> => {
    const prisma = new PrismaClient();
    return await prisma.staff.findMany();
}

export const getById = async (id: string): Promise<Staff | null> => {
    const prisma = new PrismaClient();
    return await prisma.staff.findUnique({
        where: {
            id
        }
    });
}

export const create = async (data: Prisma.StaffCreateInput): Promise<Staff> => {
    const prisma = new PrismaClient();
    return await prisma.staff.create({
        data
    });
}

export const update = async (id: string, data: Prisma.StaffUpdateInput): Promise<Staff> => {
    const prisma = new PrismaClient();
    return await prisma.staff.update({
        where: {
            id
        },
        data
    });
}

export const logicalDelete = async (id: string): Promise<Staff> => {
    const prisma = new PrismaClient();
    return await prisma.staff.update({
        where: {
            id
        },
        data: {
            isDeleted: true
        }
    });
}
