import { observable, action } from 'mobx'
import { User, UserInput } from 'model/UserModel'
import { IRootStore } from './index'
import userRepo from 'repository/UserRepository'


export interface IUserStore {
  user: User|null
  login(e: any): void
}

export default class UserStore implements IUserStore {
  private root: IRootStore
  @observable public user: User|null

  constructor (root: IRootStore) {
    this.root = root
    this.user = JSON.parse(localStorage.getItem('user') || 'null') as User|null
  }

  @action login = (e: any): void => {
    e.preventDefault()
    this.user = userRepo.signIn()
  }
}