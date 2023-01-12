interface User {
  id?: number;
  name: string;
  age: number;
}

class UserModel {
  private database: User[] = [];
  private lastId: number = 0;

  create(user: User): User {
    const newUser = { ...user, id: this.lastId++ };
    this.database.push(newUser);

    return newUser;
  }

  getAll(): User[] {
    return [...this.database];
  }
}

class UserService {
  constructor(protected userModel: UserModel) {}
  
  create(user: User): User {
    if (user.age > 200) {
      throw new Error('Invalid age');
    }
    return this.userModel.create(user);
  }

  getAll(): User[] {
    return this.userModel.getAll();
  }
}

const userModel = new UserModel();
const userService = new UserService(userModel);