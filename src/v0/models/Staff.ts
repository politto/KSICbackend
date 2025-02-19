import {t} from "elysia";

// model Staff {
//     id      String @id
//     name    String @db.VarChar
//     surname String @db.VarChar
//     email   String @db.VarChar
//     phone   String @db.VarChar
//   }

export const StaffDto = t.Object({
    id: t.String(),
    name: t.String(),
    surname: t.String(),
    email: t.String(),
    phone: t.String(),
    isDeleted: t.Boolean()
});

export type Staff = typeof StaffDto.static;