import { createContext } from "react";

const PhotoContext = createContext();

export const PhotoContextProvider = PhotoContext.Provider;
export const PhotoContextConsumer = PhotoContext.Consumer;