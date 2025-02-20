import { Customer } from '@prisma/client';

import {
    getAll as getAllFromRepo,
    getById as getByIdFromRepo,
    create as createFromRepo,
    update as updateFromRepo,
    logicalDelete as logicalDeleteFromRepo
} from '../repositories/CustomerRepo';

export const getAll = async (): Promise<Customer[]> => {
    return await getAllFromRepo();
}

export const getById = async (id: string): Promise<Customer | null> => {
    return await getByIdFromRepo(id);
}

export const create = async (data: any): Promise<Customer> => {
    return await createFromRepo(data);
}

export const update = async (id: string, data: any): Promise<Customer | null> => {
    return await updateFromRepo(id, data);
}

export const logicalDelete = async (id: string): Promise<Customer> => {
    return await logicalDeleteFromRepo(id);
}