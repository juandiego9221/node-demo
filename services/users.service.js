class UserService {
  constructor() { }

  getDetails(limit, offset) {
    if (limit && offset) {
      return { limit, offset };
    } else {
      return { message: 'no limit or offset' };
    }
  }
}

module.exports = UserService;
