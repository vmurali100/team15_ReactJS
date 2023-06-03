import { createContext } from "react";

const UserContext = createContext();
export const UserContextProvider = UserContext.Provider; // TO Add the Data at top level. It works as Wrapper Component 
export const UserContextConsumer = UserContext.Consumer; // To Access the data at Bottom . It also works as Consumer Component