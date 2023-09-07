import { combineReducers } from "redux";
import * as userReducer from './Users/Users.Reducer'

export const rootreducer = combineReducers({

  [userReducer.usersFeatureKey] : userReducer.reducer

}); 