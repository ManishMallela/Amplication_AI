import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async GetUserProfile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async Login(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async Logout(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
