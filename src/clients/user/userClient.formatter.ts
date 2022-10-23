import { User, UserApi } from './userClient.types';


export const mapUserData = (data: UserApi): User => ({
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    groups: data.groups,
    permissions: data.permissions,
  });