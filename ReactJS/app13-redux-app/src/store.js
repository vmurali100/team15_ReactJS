import {configureStore} from '@reduxjs/toolkit';

import usersReducer from './Users.slice'
export const store = configureStore({
    reducer:{
       users:usersReducer
    }
})