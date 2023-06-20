import { createContext } from "react";

const AlbumContext = createContext();
export const AlbumContextProvider = AlbumContext.Provider;
export const AlbumContextConsumer = AlbumContext.Consumer;