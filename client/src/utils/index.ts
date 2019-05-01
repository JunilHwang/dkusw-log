import moment from 'moment'

export const getDateFormat = (ms: number) => {
  const s: number = 1000
  const m: number = s * 60
  const h: number = m * 60
  const d: number = h * 24
  const w: number = d * 7
  const ymdhm = moment(new Date(ms)).format("YYYY-MM-DD hh:mm")
  ms -= +new Date()
  if (ms < m) {
    return ~~(ms / s) + '초 전'
  } else if (ms < h) {
    return ~~(ms / m) + '분 전'
  } else if (ms < d) {
    return ~~(ms / h) + '시간 전'
  } else if (ms < w) {
    return ~~(ms / d) + '일 전'
  } else {
    return ymdhm
  }
}