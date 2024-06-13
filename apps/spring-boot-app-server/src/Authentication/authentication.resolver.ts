import * as graphql from "@nestjs/graphql";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Query(() => String)
  async GetUserProfile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetUserProfile(args);
  }

  @graphql.Query(() => String)
  async Login(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => Boolean)
  async Logout(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.Logout(args);
  }
}
