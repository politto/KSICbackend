import { getAll as getAllFromRepo, getById as getByIdFromRepo, create as createFromRepo, update as updateFromRepo, updateQuestionSet as updateQuestionSetFromRepo, logicalDelete as logicalDeleteFromRepo, createNewResponsibleHistory as createNewResponsibleHistoryFromRepo, getCurrentResponsibleHistory, suspendCurrentResponsibleHistory } from '../repositories/InstrumentRepo';
export const getAll = async () => {
    return await getAllFromRepo();
};
export const getByIdWithResponsiblePerson = async (id) => {
    console.log(id);
    const instrument = (await getByIdFromRepo(id));
    console.log("eeee");
    const currentResponsibleHistory = (await getCurrentResponsibleHistory(id));
    return {
        instrument: instrument,
        responsiblePerson: currentResponsibleHistory
    };
};
export const create = async (data) => {
    return await createFromRepo(data);
};
export const createWithNewResponsibleHistory = async (data, responsiblePersonId) => {
    const instrument = await createFromRepo(data);
    const currentResponsibleHistory = await createNewResponsibleHistoryFromRepo(responsiblePersonId, instrument.id);
    return {
        instrument: instrument,
        responsiblePerson: currentResponsibleHistory
    };
};
export const createNewResponsibleHistory = async (responsiblePersonId, instrumentId) => {
    suspendCurrentResponsibleHistory(instrumentId);
    return await createNewResponsibleHistoryFromRepo(responsiblePersonId, instrumentId);
};
export const updateResponsibleHistory = async (responsiblePersonId, instrumentId) => {
    suspendCurrentResponsibleHistory(instrumentId);
    return await createNewResponsibleHistoryFromRepo(responsiblePersonId, instrumentId);
};
export const update = async (id, data) => {
    return await updateFromRepo(id, data);
};
export const updateQuestionSet = async (id, data) => {
    return await updateQuestionSetFromRepo(id, data);
};
export const logicalDelete = async (id) => {
    return await logicalDeleteFromRepo(id);
};
