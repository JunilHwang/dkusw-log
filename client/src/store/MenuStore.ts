import { observable, action } from 'mobx'
import { IRootStore } from './index'
import { Menu } from 'model/MenuModel'

export interface IMenuStore {
  category: Menu[]
  selected: string|null
  setMenu(selected: string): void
}

export default class MenuStore implements IMenuStore {
  private root: IRootStore
  @observable public selected: string|null = null
  @observable public category: Menu[] = []
  constructor (root: IRootStore) { 
    this.root = root
    this.category = [
      { title: 'Category1', url: '/posts/category1', icon: null },
      { title: 'Category2', url: '/posts/category2', icon: null },
      { title: 'Category3', url: '/posts/category3', icon: null }
    ]
  }

  @action setMenu (selected: string) {
    console.log(selected)
    this.selected = selected
  }
}