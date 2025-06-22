export interface IPaginationButton {
  action?: 'prev' | 'next',
  disabled?: boolean,
  onclick?: () => void,
  class?: string
}