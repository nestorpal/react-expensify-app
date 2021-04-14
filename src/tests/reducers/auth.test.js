import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const uid = 'abc';
    const action = { type: 'LOGIN', uid };
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(uid);
});

test('Should clear uid for logout', () => {
    const state = authReducer(undefined, { type: 'LOGOUT' });
    expect(state).toEqual({});
});