import { PrismaClient, Instrument } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async (): Promise<Instrument[]> => {
    return await prisma.instrument.findMany();
}

export const getById = async (id: string): Promise<Instrument | null> => {
    return await prisma.instrument.findUnique({
        where: {
            id
        }
    });
}

export const create = async (data: Omit<Instrument, 'id'>): Promise<Instrument> => {
    return await prisma.instrument.create({
        data
    });
}

export const update = async (id: string, data: Partial<Instrument>): Promise<Instrument> => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data
    });
}

export const updateQuestionSet = async (id: string, data: string): Promise<Instrument> => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data: {
            questionSet: data
        }
    });
}

export const logicalDelete = async (id: string): Promise<Instrument> => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data: {
            isDeleted: true
        }
    });
}
