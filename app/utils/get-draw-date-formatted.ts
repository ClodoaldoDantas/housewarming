import { DRAW_DATE } from '~/config/constants'

export default function getDrawDateFormatted() {
  const dateFormatted = new Date(DRAW_DATE).toLocaleDateString('pt-BR')
  return dateFormatted
}
