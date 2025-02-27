import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAll = async () => {
    return await prisma.instrument.findMany();
};
export const getById = async (id) => {
    return await prisma.instrument.findUnique({
        where: {
            id
        }
    });
};
export const getCurrentResponsibleHistory = async (instrumentId) => {
    return await prisma.responsibleHistory.findFirst({
        where: {
            instrumentId: instrumentId,
            endDT: null
        }
    });
};
export const create = async (data) => {
    return await prisma.instrument.create({
        data
    });
};
export const createNewResponsibleHistory = async (responsiblePersonId, instrumentId) => {
    return await prisma.responsibleHistory.create({
        data: {
            responsiblePersonId,
            instrumentId,
            startDT: new Date()
        }
    });
};
export const update = async (id, data) => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data
    });
};
export const updateQuestionSet = async (id, data) => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data: {
            questionSet: data
        }
    });
};
export const logicalDelete = async (id) => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data: {
            isDeleted: true
        }
    });
};
export const suspendCurrentResponsibleHistory = async (instrumentId) => {
    return await prisma.responsibleHistory.updateMany({
        where: {
            instrumentId: instrumentId,
            endDT: null
        },
        data: {
            endDT: new Date()
        }
    });
};
