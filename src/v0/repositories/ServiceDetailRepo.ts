import { Prisma, PrismaClient, ServiceDetail } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async (): Promise<ServiceDetail[]> => {
  return prisma.serviceDetail.findMany();
};

export const getById = async (id: string, instrumentId: string): Promise<ServiceDetail | null> => {
  return prisma.serviceDetail.findUnique({
    where: {
      serviceId_instrumentId: {
        serviceId: id,
        instrumentId: instrumentId,
      },
    },
  });
};

export const create = async (data: Prisma.ServiceDetailCreateInput): Promise<ServiceDetail> => {
  return prisma.serviceDetail.create({
    data: data,
  });
};

export const update = async (id: string, instrumentId: string, data: Prisma.ServiceDetailUpdateInput): Promise<ServiceDetail> => {
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

export const logicalDelete = async (id: string, instrumentId: string): Promise<ServiceDetail> => {
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