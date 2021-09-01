export function authHeader() {
    // return authorization header with jwt token
    let user = JOSN.parse(localStorage.getItem('user'));
    if(user && user.token) {
        return {'Authorization': 'Bearer' + user.token}
    } else {
        return {}
    }
}