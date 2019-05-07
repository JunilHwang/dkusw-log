import { Post } from 'model/PostModel'
import { User } from 'model/UserModel'
import { Comment } from 'model/CommentModel'

const tester: User = {
  idx: 1,
  id: 'test',
  name: '황준일',
  email: 'tjsdlf4261@gmail.com',
  profileImage: require('assets/images/no-profile.png')
}

const DummyComments: Comment[] = [
  {
    idx: 1,
    writer: tester,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, sed.',
    reg_date: (+new Date()) + 100000
  },
  {
    idx: 2,
    writer: tester,
    content: 'Molestias autem eveniet mollitia, deserunt at ullam quis fugit eos.',
    reg_date: (+new Date()) + 200000
  },
  {
    idx: 3,
    writer: tester,
    content: 'Asperiores deleniti architecto voluptatem nisi molestias. Aperiam commodi quis eius?',
    reg_date: (+new Date()) + 300000
  }
]

const DummyPosts: Post[] = [
  {
    idx: 1,
    thumbnail: require('assets/images/no-thumbnail.png'),
    writer: tester,
    subject: 'Lorem ipsum dolor sit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa cumque, similique labore ad aperiam.',
    reg_date: (+new Date()) + 100000,
    comments: DummyComments
  },
  {
    idx: 2,
    thumbnail: require('assets/images/no-thumbnail.png'),
    writer: tester,
    subject: 'Magni, corporis quis molestiae.',
    content: 'Blanditiis, error earum maxime veniam sequi reprehenderit voluptas necessitatibus, unde id consectetur, soluta iusto cupiditate.',
    reg_date: (+new Date()) + 200000,
    comments: DummyComments
  },
  {
    idx: 3,
    thumbnail: require('assets/images/no-thumbnail.png'),
    writer: tester,
    subject: 'Deserunt, similique, ducimus. Culpa.',
    content: 'Expedita at, vitae pariatur, ipsum possimus earum ducimus itaque eum blanditiis exercitationem officiis ipsam sint.',
    reg_date: (+new Date()) + 300000,
    comments: DummyComments
  },
  {
    idx: 4,
    thumbnail: require('assets/images/no-thumbnail.png'),
    writer: tester,
    subject: 'Veniam, delectus id harum.',
    content: 'Odio doloremque rem neque, maiores quibusdam ipsa. Odit explicabo, nulla voluptatum quae debitis quo cumque!',
    reg_date: (+new Date()) + 400000,
    comments: DummyComments
  },
]

class PostRepository {
  findAll (category: string) {
    const posts: Post[] = DummyPosts.slice().concat(DummyPosts.slice(), DummyPosts.slice())
    return posts
  }
  find (idx: number) {
    const post: Post|null = DummyPosts.find((v: Post) => v.idx === idx) || null
    return post
  }
  findRecentAll() {
    const posts: Post[] = DummyPosts
    return posts
  }
  findNoticeAll() {
    const posts: Post[] = DummyPosts
    return posts
  }
  findHotAll() {
    const posts: Post[] = DummyPosts
    return posts
  }
  findUserPostAll (idx: number) {
    const posts: Post[] = DummyPosts
    return posts
  }
}

export default new PostRepository()