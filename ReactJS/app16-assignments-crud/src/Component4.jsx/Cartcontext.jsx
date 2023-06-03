import { createContext } from "react";

const Cartcontext = createContext();

export const CartContextProvider = Cartcontext.Provider;
export const CarttContextConsumer = Cartcontext.Consumer;