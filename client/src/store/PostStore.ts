import { observable, action} from 'mobx'
import { Post } from 'model/PostModel'
import { IRootStore } from 'store'
import PostRepo from 'repository/PostRepository'

export interface IPostStore {
  posts: Post[]
  recentPosts: Post[]
  noticePosts: Post[]
  hotPosts: Post[]
  getPosts(category: string): void
  getRecently(): void
  getNotice(): void
  getHots(): void
}

export default class PostStore implements IPostStore {
  @observable public posts: Post[] = []
  @observable public recentPosts: Post[] = []
  @observable public noticePosts: Post[] = []
  @observable public hotPosts: Post[] = []
  private root: IRootStore
  constructor (root: IRootStore) {
    this.root = root
  }

  @action getPosts = (category: string): void => {
    this.root.menuStore.setMenu(category)
    this.posts = PostRepo.findAll(category)
  }

  @action getRecently = (): void => {
    this.recentPosts = PostRepo.findRecentAll()
  }

  @action getNotice = (): void => {
    this.noticePosts = PostRepo.findNoticeAll()
  }

  @action getHots = (): void => {
    this.hotPosts = PostRepo.findHotAll()
  }
}