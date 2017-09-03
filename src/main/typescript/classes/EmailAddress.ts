
class EmailAddress {

  private _email: string = "";

  constructor(s: string) {
    this._email = s;
  }
  
  domain(): string {
    if (this.isEmail()) {
      return this._email.split('@')[1];
    }
    return "";
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  isEmail() {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.email);
  }
}
export { EmailAddress };
