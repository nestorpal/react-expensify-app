import { login, logout } from '../../actions/auth';

test('Should generate login action object', () => {
    const uid = 'abc';
    const action = login(uid)
    expect(response).toEqual({ type: 'LOGIN', uid });
});

test('Should generate logout action object', () => {
    const action = logout();
    expect(response).toEqual({ type: 'LOGOUT' });
});