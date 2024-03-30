export type ButtonGroupProps = {
  children: React.ReactNode
}

export type ButtonItemProps = {
  isSelect: boolean
  title: string
  desc: string
  onClick?: () => void
  //   children?: (isSelect: boolean) => React.ReactNode
}
