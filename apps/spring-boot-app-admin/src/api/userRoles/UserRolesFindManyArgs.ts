import { UserRolesWhereInput } from "./UserRolesWhereInput";
import { UserRolesOrderByInput } from "./UserRolesOrderByInput";

export type UserRolesFindManyArgs = {
  where?: UserRolesWhereInput;
  orderBy?: Array<UserRolesOrderByInput>;
  skip?: number;
  take?: number;
};
