import { createContext } from "react";

const PrinceContext = createContext();

export const PrinceContextProvider = PrinceContext.Provider;
export const PrinceContextConsumer = PrinceContext.Consumer;
