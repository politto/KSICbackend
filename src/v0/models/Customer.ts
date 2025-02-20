import { t } from 'elysia'


// model Customer {
//     id          String @id @default(cuid())
//     name        String @db.VarChar(255)
//     surname     String @db.VarChar(255)
//     proposition String @db.VarChar(255)
//     workplace   String @db.VarChar(255)
//     career      String @db.VarChar(255)
//   }
  
//   enum typeOfCust {
//     inHouse
//     government
//     private
//   }

export const CustomerDto = t.Object({
    id: t.String(),
    name: t.String(),
    surname: t.String(),
    proposition: t.String(),
    workplace: t.String(),
    career: t.String(),
    isDeleted: t.Boolean(),
    typeOfCust: t.Enum({
        inHouse: "inHouse",
        government: "government",
        private: "private",
    }),
});

export type Customer = typeof CustomerDto.static;
