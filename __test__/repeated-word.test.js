'use strict';

const words = require('../repeated-word/repeated-word');

describe('repeated-word.js', () => {
  test('should return first repeated word from the string', () => {
    expect(words.repeatedWord('Once upon a time there was a frog.')).toEqual('a');
    expect(words.repeatedWord('It was the best of times, it was the worst of times.')).toEqual('it');
    expect(words.repeatedWord('Fanciful harried beluga oxymoron tranquil beluga fanciful harried.')).toEqual('beluga');
  });
  test('should ignore non-alphabetical characters', () => {
    expect(words.repeatedWord('Once 234 upon -   a  ... time there    was a frog.')).toEqual('a');
  });
  test('should return failure message if no repeated word', () => {
    expect(words.repeatedWord('Fanciful harried beluga oxymoron tranquil')).toEqual('No repeated words.');
  });
  test('should return failure message if given empty string', () => {
    expect(words.repeatedWord('')).toEqual('No repeated words.');
  });
});
