import { Staff } from '@prisma/client';
import {
    getAll as getAllFromRepo,
    getById as getByIdFromRepo,
    create as createFromRepo,
    update as updateFromRepo,
    logicalDelete as logicalDeleteFromRepo
} from '../repositories/StaffRepo';

export const getAll = async (): Promise<Staff[]> => {
    return await getAllFromRepo();
}

export const getById = async (id: string): Promise<Staff | null> => {
    return await getByIdFromRepo(id);
}

export const create = async (data: any): Promise<Staff> => {
    return await createFromRepo(data);
}

export const update = async (id: string, data: any): Promise<Staff | null> => {
    return await updateFromRepo(id, data);
}

export const logicalDelete = async (id: string): Promise<Staff> => {
    return await logicalDeleteFromRepo(id);
}
