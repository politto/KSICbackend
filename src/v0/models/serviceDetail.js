import { t } from "elysia";
//   
//   model ServiceDetails {
//     id          String   @id @default(cuid())
//     standardPriceForPublicOrg Float
//     standardPriceForPrivateOrg Float
//     standardPriceForInternal Float
//     name        String   @db.VarChar(255)
//     unitCount   String   @db.VarChar(6)
//   }
//   
export const ServiceDetailDto = t.Object({
    id: t.String(),
    standardPriceForPublicOrg: t.Number(),
    standardPriceForPrivateOrg: t.Number(),
    standardPriceForInternal: t.Number(),
    name: t.String(),
    unitCount: t.String(),
});
