import { Instrument, ResponsibleHistory } from '@prisma/client';
import { 
    getAll as getAllFromRepo,
    getById as getByIdFromRepo,
    create as createFromRepo,
    update as updateFromRepo,
    updateQuestionSet as updateQuestionSetFromRepo,
    logicalDelete as logicalDeleteFromRepo,
    createNewResponsibleHistory as createNewResponsibleHistoryFromRepo,
    getCurrentResponsibleHistory,
    suspendCurrentResponsibleHistory
 } from '../repositories/InstrumentRepo';

export const getAll = async (): Promise<Instrument[]> => {
    return await getAllFromRepo();
}

export const getByIdWithResponsiblePerson = async (id: string): Promise<{instrument: Instrument, responsiblePerson: ResponsibleHistory}> => {
    const instrument: Instrument = (await getByIdFromRepo(id))!;
    const currentResponsibleHistory: ResponsibleHistory = (await getCurrentResponsibleHistory(id))!;
    return {
        instrument: instrument,
        responsiblePerson: currentResponsibleHistory
    }
}

export const create = async (data: Instrument): Promise<Instrument> => {
    return await createFromRepo(data);
}

export const createWithNewResponsibleHistory = async (data: Instrument, responsiblePersonId: string): Promise<{instrument: Instrument, responsiblePerson: ResponsibleHistory}> => {
    const instrument: Instrument = await createFromRepo(data);
    const currentResponsibleHistory: ResponsibleHistory = await createNewResponsibleHistoryFromRepo(responsiblePersonId, instrument.id);
    return {
        instrument: instrument,
        responsiblePerson: currentResponsibleHistory
    };
}

export const createNewResponsibleHistory = async (responsiblePersonId: string, instrumentId: string) => {
    suspendCurrentResponsibleHistory(instrumentId);
    return await createNewResponsibleHistoryFromRepo(responsiblePersonId, instrumentId);
}

export const updateResponsibleHistory = async (responsiblePersonId: string, instrumentId: string) => {
    suspendCurrentResponsibleHistory(instrumentId);
    return await createNewResponsibleHistoryFromRepo(responsiblePersonId, instrumentId);
}

export const update = async (id: string, data: Instrument): Promise<Instrument> => {
    return await updateFromRepo(id, data);
}

export const updateQuestionSet = async (id: string, data: string): Promise<Instrument> => {
    return await updateQuestionSetFromRepo(id, data);
}

export const logicalDelete = async (id: string): Promise<Instrument> => {
    return await logicalDeleteFromRepo(id);
}
