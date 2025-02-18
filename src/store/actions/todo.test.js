import axios from 'axios';
import * as actionCreators from './todo';
import store from '../store';
describe('ActionCreators', () => {
    it(`'getTodo' should fetch todos correctly`, (done) => {
        const stubTodoList = [{
            id: 0,
            title: 'title 1',
            content: 'content 1'
        },];
        axios.get = jest.fn(url => {
            return new Promise((resolve, reject) => {
                const result = {
                    status: 200, data: stubTodoList
                };
                resolve(result);
            })
        }); // Or, return Promise.resolve({status: 200, data: stubTodoData}) will do as well.
        store.dispatch(actionCreators.getTodos())
            .then(() => {
                const newState = store.getState();
                expect(newState.td.todos).toBe(stubTodoList);
                expect(axios.get).toHaveBeenCalledTimes(1);
                done();
            });
    });
})

