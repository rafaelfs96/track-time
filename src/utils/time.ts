export function rawTime() {
  const date = new Date()

  const day = date.getUTCDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return { day, month, year, hour, minute, second }
}

export function formatTime(dateObj: {
  day: number
  month: number
  year: number
  hour: number
  minute: number
  second: number
}) {
  const { day, hour, minute, month, second, year } = dateObj

  return {
    day: day < 10 ? `0${day}` : day,
    month: month < 10 ? `0${month}` : month,
    year,
    hour: hour < 10 ? `0${hour}` : hour,
    minute: minute < 10 ? `0${minute}` : minute,
    second: second < 10 ? `0${second}` : second
  }
}

export function timeBetween(
  { startDate = new Date(), endDate = new Date() },
  units?: { weeks: string; days: string; hours: string; minutes: string; seconds: string }
) {
  let delta = Math.abs(endDate.getTime() - startDate.getTime()) / 1000

  const time = [
    [units?.weeks || 'weeks', 7 * 24 * 60 * 60],
    [units?.days || 'days', 24 * 60 * 60],
    [units?.hours || 'hours', 60 * 60],
    [units?.minutes || 'minutes', 60],
    [units?.seconds || 'seconds', 1]
  ]

  const calculatedTime = time.reduce((acc, [key, value]) => {
    const temp = Math.floor(delta / Number(value))
    if (temp === 0) return acc
    else {
      acc.set(key, temp)
      delta -= acc.get(key) * Number(value)
      return acc
    }
  }, new Map())

  const finalTime: string[] = []
  calculatedTime.forEach((time, key) => finalTime.push(`${time} ${key}`))

  return finalTime.join(', ')
}
