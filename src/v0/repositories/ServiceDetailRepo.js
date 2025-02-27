import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAll = async () => {
    return prisma.serviceDetail.findMany();
};
export const getById = async (id, instrumentId) => {
    return prisma.serviceDetail.findUnique({
        where: {
            serviceId_instrumentId: {
                serviceId: id,
                instrumentId: instrumentId,
            },
        },
    });
};
export const create = async (data) => {
    return prisma.serviceDetail.create({
        data: data,
    });
};
export const update = async (id, instrumentId, data) => {
    return prisma.serviceDetail.update({
        where: {
            serviceId_instrumentId: {
                serviceId: id,
                instrumentId: instrumentId,
            },
        },
        data: data,
    });
};
export const logicalDelete = async (id, instrumentId) => {
    return prisma.serviceDetail.update({
        where: {
            serviceId_instrumentId: {
                serviceId: id,
                instrumentId: instrumentId,
            },
        },
        data: {
            isDeleted: true,
        },
    });
};
