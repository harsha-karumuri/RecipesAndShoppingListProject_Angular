export class User {
  constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date) {}

  get token() {
    // it looks like a function but it is a property .. where we can user like user.token
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
