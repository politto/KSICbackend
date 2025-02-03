import {
    getAll as getAllFromRepo,
    getById as getByIdFromRepo,
    create as createFromRepo,
    update as updateFromRepo,
    logicalDelete as logicalDeleteFromRepo
} from '../repositories/ServiceDetailRepo';

export const getAll = async () => {
    return await getAllFromRepo();
}

export const getById = async (id: string, instrumentId: string) => {
    return await getByIdFromRepo(id, instrumentId);
}

export const create = async (data: any) => {
    return await createFromRepo(data);
}

export const update = async (id: string, instrumentId: string, data: any) => {
    return await updateFromRepo(id, instrumentId, data);
}

export const logicalDelete = async (id: string, instrumentId: string) => {
    return await logicalDeleteFromRepo(id, instrumentId);
}