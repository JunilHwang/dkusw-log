import { User, UserInput } from 'model/UserModel'

class UserRepository {
  signIn (): User {
    const data: User = {
      idx: 1,
      id: 'test',
      name: 'junilHwang',
      email: 'tjsdlf4261@gmail.com',
      profileImage: require('assets/images/no-profile.png')
    }
    localStorage.setItem('user', JSON.stringify(data))
    return data
  }
}

export default new UserRepository()