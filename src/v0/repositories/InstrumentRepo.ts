import { PrismaClient, Instrument, ResponsiblePerson, ResponsibleHistory } from '@prisma/client';

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

export const getCurrentResponsibleHistory = async (instrumentId: string): Promise<ResponsibleHistory | null> => {
    return await prisma.responsibleHistory.findFirst({
        where: {
            instrumentId:instrumentId,
            endDT: null
        }
    });
}

export const create = async (data: Omit<Instrument, 'id'>): Promise<Instrument> => {
    return await prisma.instrument.create({
        data
    });
}

export const createNewResponsibleHistory = async (responsiblePersonId: string, instrumentId: string) => {
    return await prisma.responsibleHistory.create({
        data: {
            responsiblePersonId,
            instrumentId,
            startDT: new Date()
        }
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

export const suspendCurrentResponsibleHistory = async (instrumentId: string) => {
    return await prisma.responsibleHistory.updateMany({
        where: {
            instrumentId: instrumentId,
            endDT: null
        },
        data: {
            endDT: new Date()
        }
    });
}