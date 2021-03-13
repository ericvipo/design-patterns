export default class NullUser {
  constructor() {
    this.name = "Invitado";
  }

  hasAccess() {
    return false;
  }
}
