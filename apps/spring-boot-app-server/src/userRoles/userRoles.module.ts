import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserRolesModuleBase } from "./base/userRoles.module.base";
import { UserRolesService } from "./userRoles.service";
import { UserRolesController } from "./userRoles.controller";
import { UserRolesResolver } from "./userRoles.resolver";

@Module({
  imports: [UserRolesModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserRolesController],
  providers: [UserRolesService, UserRolesResolver],
  exports: [UserRolesService],
})
export class UserRolesModule {}
