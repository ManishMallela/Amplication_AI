import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationService } from "./authentication.service";

@swagger.ApiTags("authentications")
@common.Controller("authentications")
export class AuthenticationController {
  constructor(protected readonly service: AuthenticationService) {}

  @common.Get("/:id/get-user-profile")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserProfile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetUserProfile(body);
      }

  @common.Get("/:id/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.Login(body);
      }

  @common.Post("/logout")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Logout(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.Logout(body);
      }
}
