import UserStore from './UserStore'
import PostStore from './PostStore'
import MenuStore from './MenuStore'

export interface IRootStore {
  userStore: UserStore
  postStore: PostStore
  menuStore: MenuStore
}

class RootStore implements IRootStore {
  public userStore: UserStore
  public postStore: PostStore
  public menuStore: MenuStore

  constructor () {
    this.userStore = new UserStore(this)
    this.postStore = new PostStore(this)
    this.menuStore = new MenuStore(this)
  }

}

export default new RootStore()