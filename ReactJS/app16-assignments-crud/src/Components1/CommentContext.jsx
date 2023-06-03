import { createContext } from "react";

const CommentContext = createContext();

export const CommentContextProvider = CommentContext.Provider;
export const CommentContextConsumer = CommentContext.Consumer;
