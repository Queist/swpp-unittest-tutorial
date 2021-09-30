import {applyMiddleware, combineReducers, createStore} from "redux";
import {middlewares} from "../store/store";

const getMockTodoReducer = jest.fn(
    initialState => (state = initialState, action) => {
        return state;
    }
);
export const getMockStore = (initialState) => {
    const mockTodoReducer = getMockTodoReducer(initialState);
    const rootReducer = combineReducers({
        td: mockTodoReducer,
    });
    return createStore(rootReducer, applyMiddleware(...middlewares));
}
