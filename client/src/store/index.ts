import UserStore from './UserStore'
import PostStore from './PostStore'

export interface IRootStore {
  userStore: UserStore,
  postStore: PostStore,
}

class RootStore implements IRootStore {
  public userStore: UserStore
  public postStore: PostStore

  constructor () {
    this.userStore = new UserStore(this)
    this.postStore = new PostStore(this)
  }

}

export default new RootStore()