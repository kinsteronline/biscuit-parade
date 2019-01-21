
import {
  defaultCompare,
  genderCompare
} from './compare'

describe('comparisons', () => {
  it('should compare two equal items to equal 0', () => {
    expect(defaultCompare(2352236, 2352236)).toEqual(0)
    expect(defaultCompare('birds', 'birds')).toEqual(0)
  })

  it('should compare a first item that is less than a second as less than 0', () => {
    expect(defaultCompare(2, 2352236)).toEqual(-1)
    expect(defaultCompare('birds', 'cats')).toEqual(-1)
  })

  it('should compare a first item that is greater than a second as greater than 0', () => {
    expect(defaultCompare(2352236, 6)).toEqual(1)
    expect(defaultCompare('dogs', 'birds')).toEqual(1)
  })

  it('should compare by gender with female less than 0', () => {
    const f = { gender: 'F' }
    const m = { gender: 'M' }
    expect(genderCompare(f, m)).toEqual(-1)
  })

  it('should compare by gender with male greater than 0', () => {
    const f = { gender: 'F' }
    const m = { gender: 'M' }
    expect(genderCompare(m, f)).toEqual(1)
  })

  it('should compare by gender being the same', () => {
    const leia = { gender: 'F' }
    const organa = { gender: 'F' }
    expect(genderCompare(leia, organa)).toEqual(0)
  })

  it('should throw on unknown gender', () => {
    const leia = { gender: 'F' }
    const r2d2 = { gender: 'R' }
    expect(() => { genderCompare(leia, r2d2) }).toThrow()
  })
})
