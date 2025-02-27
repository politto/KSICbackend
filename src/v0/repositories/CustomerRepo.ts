import { Prisma ,PrismaClient, Customer } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async (): Promise<Customer[]> => {
  return prisma.customer.findMany();
};

export const getById = async (id: string): Promise<Customer | null> => {
  return prisma.customer.findUnique({
    where: {
      id
    }
  });
};

export const create = async (data: Prisma.CustomerCreateInput): Promise<Customer> => {
  return prisma.customer.create({
    data
  });
};

export const update = async (id: string, data: Prisma.CustomerUpdateInput): Promise<Customer> => {
  return prisma.customer.update({
    where: {
      id
    },
    data
  });
};

export const logicalDelete = async (id: string): Promise<Customer> => {
    return prisma.customer.update({
        where: {
        id
        },
        data: {
        isDeleted: true
        }
    });
};