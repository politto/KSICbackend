import { t } from 'elysia';
// model ResponsiblePerson {
//     id          String   @id @default(cuid())
//     name        String   @db.VarChar(255)
//     surname     String   @db.VarChar(255)
//     email       String   @db.VarChar(255)
//     phone       String   @db.VarChar(255)
//     propositionalTitle String   @db.VarChar(255)
//     isResigned Boolean
//   }
export const ResponsiblePersonDto = t.Object({
    id: t.String(),
    name: t.String(),
    surname: t.String(),
    email: t.String(),
    phone: t.String(),
    propositionalTitle: t.String(),
    isResigned: t.Boolean(),
});
