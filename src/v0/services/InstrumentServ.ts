import { 
    getAll as getAllFromRepo,
    getById as getByIdFromRepo,
    create as createFromRepo,
    update as updateFromRepo,
    updateQuestionSet as updateQuestionSetFromRepo,
    logicalDelete as logicalDeleteFromRepo
 } from '../repositories/InstrumentRepo';

export const getAll = async () => {
    return await getAllFromRepo();
}

export const getById = async (id: string) => {
    return await getByIdFromRepo(id);
}

export const create = async (data: any) => {
    return await createFromRepo(data);
}

export const update = async (id: string, data: any) => {
    return await updateFromRepo(id, data);
}

export const updateQuestionSet = async (id: string, data: string) => {
    return await updateQuestionSetFromRepo(id, data);
}

export const logicalDelete = async (id: string) => {
    return await logicalDeleteFromRepo(id);
}