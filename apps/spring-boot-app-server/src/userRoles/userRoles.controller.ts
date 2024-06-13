import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserRolesService } from "./userRoles.service";
import { UserRolesControllerBase } from "./base/userRoles.controller.base";

@swagger.ApiTags("userRoles")
@common.Controller("userRoles")
export class UserRolesController extends UserRolesControllerBase {
  constructor(
    protected readonly service: UserRolesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
