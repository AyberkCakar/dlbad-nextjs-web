import Cookies from 'js-cookie';

export class UserService {
  static getUser(): any {
    const user = Cookies.get('user');

    return user ? JSON.parse(user) : undefined;
  }
}
