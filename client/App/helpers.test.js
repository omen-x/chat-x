import helpers from './helpers'; // eslint-disable-line


describe('Helpers', () => {
  test('capitalizeFirstLetter', () => {
    const { capitalizeFirstLetter } = helpers;
    const str = 'loRem';
    const expectStr = 'LoRem';

    expect(capitalizeFirstLetter(str)).toBe(expectStr);
  });
});
