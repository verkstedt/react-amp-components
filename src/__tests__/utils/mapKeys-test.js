import mapKeys from '../../utils/mapKeys'

test('mapKeys should work when it doesn\'t change any keys', () => {
  const input = {
    'some-key': 'some-value',
    anotherKey: 'anotherValue'
  }
  expect(mapKeys(input)).toMatchObject(input)
})

test('mapKeys should work when it changes a key', () => {
  const input = {
    dataIframeSrc: 'one'
  }
  const expectedOutput = {
    'data-iframe-src': 'one'
  }
  expect(mapKeys(input)).toMatchObject(expectedOutput)
  expect(mapKeys(input)).not.toHaveProperty('dataIframeSrc')
})
