import { Instrument } from '@prisma/client';
import { ResponsiblePerson } from '../models/ResponsiblePerson';
import {

    getAll as getAllFromRepo,
    getById as getByIdFromRepo,
    create as createFromRepo,
    update as updateFromRepo,
    logicalDelete as logicalDeleteFromRepo
} from '../repositories/ResponsiblePersonRepo';

export const getAll = async (): Promise<ResponsiblePerson[]> => {
    return await getAllFromRepo();
}

export const getById = async (id: string): Promise<ResponsiblePerson | null> => {
    return await getByIdFromRepo(id);
}

export const create = async (data: any): Promise<ResponsiblePerson> => {
    return await createFromRepo(data);
}

export const update = async (id: string, data: any): Promise<ResponsiblePerson | null> => {
    return await updateFromRepo(id, data);
}

export const logicalDelete = async (id: string): Promise<ResponsiblePerson> => {
    return await logicalDeleteFromRepo(id);
}