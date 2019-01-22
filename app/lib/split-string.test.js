import splitString from './split-string'

describe('splitString', () => {
  it('should split on a comma', () => {
    const words = splitString('first,second, third,fourth')
    expect(words).toEqual([ 'first', 'second', 'third', 'fourth' ])
  })

  it('should split on a pipe', () => {
    const words = splitString('first  |  second  |  third  |  fourth')
    expect(words).toEqual([ 'first', 'second', 'third', 'fourth' ])
  })

  it('should split on a space', () => {
    const words = splitString('first second third     fourth')
    expect(words).toEqual([ 'first', 'second', 'third', 'fourth' ])
  })

  it('should not split on unknown delimiter', () => {
    const words = splitString('first;second;third;fourth;')
    expect(words).toEqual([ 'first;second;third;fourth;' ])
  })

  it('should return empty without args', () => {
    expect(splitString()).toEqual([''])
  })
})
