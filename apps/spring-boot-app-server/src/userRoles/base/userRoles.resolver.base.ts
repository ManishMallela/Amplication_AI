/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserRoles } from "./UserRoles";
import { UserRolesCountArgs } from "./UserRolesCountArgs";
import { UserRolesFindManyArgs } from "./UserRolesFindManyArgs";
import { UserRolesFindUniqueArgs } from "./UserRolesFindUniqueArgs";
import { DeleteUserRolesArgs } from "./DeleteUserRolesArgs";
import { UserRolesService } from "../userRoles.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserRoles)
export class UserRolesResolverBase {
  constructor(
    protected readonly service: UserRolesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserRoles",
    action: "read",
    possession: "any",
  })
  async _userRolesItemsMeta(
    @graphql.Args() args: UserRolesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserRoles])
  @nestAccessControl.UseRoles({
    resource: "UserRoles",
    action: "read",
    possession: "any",
  })
  async userRolesItems(
    @graphql.Args() args: UserRolesFindManyArgs
  ): Promise<UserRoles[]> {
    return this.service.userRolesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserRoles, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserRoles",
    action: "read",
    possession: "own",
  })
  async userRoles(
    @graphql.Args() args: UserRolesFindUniqueArgs
  ): Promise<UserRoles | null> {
    const result = await this.service.userRoles(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserRoles)
  @nestAccessControl.UseRoles({
    resource: "UserRoles",
    action: "delete",
    possession: "any",
  })
  async deleteUserRoles(
    @graphql.Args() args: DeleteUserRolesArgs
  ): Promise<UserRoles | null> {
    try {
      return await this.service.deleteUserRoles(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
