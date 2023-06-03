import { createContext } from "react";

const userContext = createContext();

export const UserContextProvider = userContext.Provider;
export const UserContextConsumer = userContext.Consumer;
