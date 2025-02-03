import { Prisma, PrismaClient, ServiceDetail } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async (): Promise<ServiceDetail[]> => {
  return prisma.serviceDetail.findMany();
};

export const getById = async (id: string): Promise<ServiceDetail | null> => {
  return prisma.serviceDetail.findUnique({
    where: {
      id: id,
    },
  });
};

export const create = async (data: Prisma.ServiceDetailCreateInput): Promise<ServiceDetail> => {
  return prisma.serviceDetail.create({
    data: data,
  });
};

export const update = async (id: string, data: Prisma.ServiceDetailUpdateInput): Promise<ServiceDetail> => {
  return prisma.serviceDetail.update({
    where: {
      id: id,
    },
    data: data,
  });
};

export const logicalDelete = async (id: string): Promise<ServiceDetail> => {
  return prisma.serviceDetail.update({
    where: {
      id: id,
    },
    data: {
      isDeleted: true,
    },
  });
};