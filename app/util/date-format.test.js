import dateFormat from './date-format'

describe('dateFormat', () => {
  it('should throw if not date is given', () =>{
    expect(dateFormat).toThrow()
  })

  it('should return date in format M/D/YYYY when provided a date', () => {
    expect(dateFormat(new Date(1998, 8, 21))).toEqual('9/21/1998')
  })

  it('should return date in format M/D/YYYY when provided a string', () => {
    expect(dateFormat('11/04/2012')).toEqual('11/4/2012')
  })
})
