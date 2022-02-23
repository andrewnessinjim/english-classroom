import React from "react";

export interface User {
    username?: string
    token?: string
    role?: string
    id?: string
}
export const UserContext = React.createContext<User>({});
export let token:{token?: string} = {token:""};