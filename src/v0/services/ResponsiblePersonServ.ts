import { Instrument, Prisma } from '@prisma/client';
import { ResponsiblePerson } from '@prisma/client';
import {

    getAll as getAllFromRepo,
    getById as getByIdFromRepo,
    create as createFromRepo,
    createMany as createManyFromRepo,
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

export const createMany = async (data: ResponsiblePerson[]): Promise<Prisma.BatchPayload> => {
    return await createManyFromRepo(data);
}

export const update = async (id: string, data: any): Promise<ResponsiblePerson | null> => {
    return await updateFromRepo(id, data);
}

export const logicalDelete = async (id: string): Promise<ResponsiblePerson> => {
    return await logicalDeleteFromRepo(id);
}