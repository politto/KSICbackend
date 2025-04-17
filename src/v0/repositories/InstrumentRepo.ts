import { PrismaClient, Instrument, ResponsiblePerson, ResponsibleHistory, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = async (): Promise<Instrument[]> => {
    return await prisma.instrument.findMany();
}

export const getById = async (id: string): Promise<Instrument | null> => {
    return await prisma.instrument.findUnique({
        where: {
            id
        }
    });
}

export const getCurrentResponsibleHistory = async (instrumentId: string): Promise<ResponsibleHistory | null> => {
    return await prisma.responsibleHistory.findFirst({
        where: {
            instrumentId:instrumentId,
            endDT: null
        }
    });
}

export const create = async (data: Omit<Instrument, 'id'>): Promise<Instrument> => {
    return await prisma.instrument.create({
        data
    });
}

export const createMany = async (data: Omit<Instrument, 'id'>[]): Promise<Prisma.BatchPayload> => {
    return await prisma.instrument.createMany({
        data
    });
}

export const createNewResponsibleHistory = async (responsiblePersonId: string, instrumentId: string) => {
    return await prisma.responsibleHistory.create({
        data: {
            responsiblePersonId,
            instrumentId,
            startDT: new Date()
        }
    });
}

export const update = async (id: string, data: Partial<Instrument>): Promise<Instrument> => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data
    });
}

export const updateQuestionSet = async (id: string, data: string): Promise<Instrument> => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data: {
            questionSet: data
        }
    });
}

export const logicalDelete = async (id: string): Promise<Instrument> => {
    return await prisma.instrument.update({
        where: {
            id
        },
        data: {
            isDeleted: true
        }
    });
}

export const suspendCurrentResponsibleHistory = async (instrumentId: string) => {
    return await prisma.responsibleHistory.updateMany({
        where: {
            instrumentId: instrumentId,
            endDT: null
        },
        data: {
            endDT: new Date()
        }
    });
}


const person = [
    {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0015.jpg",
        "name": "นายสัญญา",
        "surname": "มีสิม",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0026.jpg",
        "name": "ดร.นันทวัน",
        "surname": "เนียมหอม",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0039.jpg",
        "name": "ศักรินทร์",
        "surname": "บุญล้ำ",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0052.jpg",
        "name": "ธัญญรัตน์",
        "surname": "ชูศรี",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0066.jpg",
        "name": "วาสินี",
        "surname": "ธรรมสถิต",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0080.jpg",
        "name": "ธนาภรณ์",
        "surname": "มาศวรรณา",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0096.jpg",
        "name": "ณัฐพร",
        "surname": "มานะประดิษฐ์",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0116.jpg",
        "name": "วีรยุทธ",
        "surname": "อินบุญมา",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0141.jpg",
        "name": "สุดใจ",
        "surname": "ผุดผาด",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      },
      {
        "picLink": "https://imgvedzraiywkjnrtwlx.supabase.co/storage/v1/object/public/ksicimage/PIC_0165.jpg",
        "name": "กรรณิกา",
        "surname": "รัตนวราหะ",
        "isResigned": false,
        "email": "",
        "phone": "",
        "propositionalTitle": "Dr.",
      }
]