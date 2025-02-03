import { ResponsiblePerson } from "@prisma/client";

import { PrismaClient } from '@prisma/client';

export const getAll = async (): Promise<ResponsiblePerson[]> => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.findMany();
}

export const getById = async (id: string): Promise<ResponsiblePerson | null> => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.findUnique({
        where: {
            id
        }
    });
}

export const create = async (data: Omit<ResponsiblePerson, 'id'>): Promise<ResponsiblePerson> => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.create({
        data
    });
}

export const update = async (id: string, data: Partial<ResponsiblePerson>): Promise<ResponsiblePerson> => {
    const prisma = new PrismaClient();
    return await prisma.responsiblePerson.update({
        where: {
            id
        },
        data
    });
}

export const logicalDelete = async (id: string): Promise<ResponsiblePerson> => {
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