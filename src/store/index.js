import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./../reducers/fetchResultsReducer";
import { favouritesReducer } from "../reducers/favouritesReducer";

const bigReducer = combineReducers({
  search: searchReducer,
  favourites: favouritesReducer
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
