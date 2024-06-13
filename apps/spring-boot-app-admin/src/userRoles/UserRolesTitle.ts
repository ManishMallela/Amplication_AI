import { UserRoles as TUserRoles } from "../api/userRoles/UserRoles";

export const USERROLES_TITLE_FIELD = "id";

export const UserRolesTitle = (record: TUserRoles): string => {
  return record.id?.toString() || String(record.id);
};
