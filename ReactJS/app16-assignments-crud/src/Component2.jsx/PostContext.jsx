import { createContext } from "react";

const PostContext = createContext();

export const PostContextProvider = PostContext.Provider;
export const PostContextConsumer = PostContext.Consumer;
