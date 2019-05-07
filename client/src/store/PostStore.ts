import { observable, action} from 'mobx'
import { Post } from 'model/PostModel'
import { IRootStore } from 'store'
import PostRepo from 'repository/PostRepository'

export interface IPostStore {
  post: Post|null
  posts: Post[]
  recentPosts: Post[]
  noticePosts: Post[]
  hotPosts: Post[]
  userPosts: Post[]
  getPosts(category: string): void
  getPost(idx: number): void
  getRecently(): void
  getNotice(): void
  getHots(): void
  getUserPosts(idx: number): void
}

export default class PostStore implements IPostStore {
  @observable public post: Post|null = null
  @observable public posts: Post[] = []
  @observable public recentPosts: Post[] = []
  @observable public noticePosts: Post[] = []
  @observable public hotPosts: Post[] = []
  @observable public userPosts: Post[] = []
  private root: IRootStore
  constructor (root: IRootStore) {
    this.root = root
  }

  @action getPosts = (category: string): void => {
    this.root.menuStore.setMenu(category)
    this.posts = PostRepo.findAll(category)
  }

  @action getPost = (idx: number):void => {
    this.post = PostRepo.find(idx)
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

  @action getUserPosts = (idx: number): void => {
    this.userPosts = PostRepo.findUserPostAll(idx)
  }
}