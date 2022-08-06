import { formatTime, rawTime, timeBetween } from './time'
import { advanceTo, clear } from 'jest-date-mock'

afterEach(() => {
  clear()
  Date.now()
})

describe('time', () => {
  it('should "time" be equals to given object result', () => {
    advanceTo(new Date('2020-06-06T09:04:03.493Z'))

    const generatedTime = rawTime()
    expect(generatedTime).toEqual({
      day: 6,
      month: 6,
      year: 2020,
      hour: 6,
      minute: 4,
      second: 3
    })
  })
})

describe('format', () => {
  it('should format "generatedTime" be equals to given object result', () => {
    advanceTo(new Date('2020-06-06T09:04:03.493Z'))

    const generatedTime = rawTime()
    const formatedTime = formatTime(generatedTime)

    expect(formatedTime).toEqual({
      day: '06',
      month: '06',
      year: 2020,
      hour: '06',
      minute: '04',
      second: '03'
    })
  })
})

describe('timeBetween', () => {
  it('should "distance" be equals to given string result', () => {
    const now = new Date('2020-06-10T11:24:03.493Z')
    const later = new Date('2020-06-11T13:40:03.493Z')

    const distance = timeBetween({ startDate: now, endDate: later })

    expect(distance).toEqual('1 days, 2 hours, 16 minutes')
  })
})
