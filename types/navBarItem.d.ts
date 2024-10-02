export interface NavBarItem {
  title: string
  id: string
  link: string
}

export interface NavBarItems {
  [key: string]: NavBarItem
}
