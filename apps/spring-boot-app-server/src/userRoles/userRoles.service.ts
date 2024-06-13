import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserRolesServiceBase } from "./base/userRoles.service.base";

@Injectable()
export class UserRolesService extends UserRolesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
