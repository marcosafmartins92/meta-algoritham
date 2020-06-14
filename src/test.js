const { questionOne, questionTwo, questionThree } = require('./index.js')

describe('Questao 1', () => {
  test.each`
  list            | result    | target
  ${[1, 4, 6, 9]} | ${[1, 3]} | ${13}
  ${[9, 5, 6, 1]} | ${[1, 2]} | ${11}
  ${[7, 8, 4, 1]} | ${[1, 3]} | ${9}
`('deve retornar os $result da lista $list que somados dao o resultado do $target', ({ list, result, target }) => {
    expect(questionOne(list, target)).toEqual(result);
  });
});

describe('Questao 2', () => {
  test.each`
  text            | result   
  ${'{[()]}'}     | ${'Sim'}
  ${'{[(]}'}      | ${'Não'}
  ${'{[(]))}'}    | ${'Não'}
  ${'{[({})]}'}   | ${'Sim'}
`('deve retornar sim quando estiver balanceada ou não, caso não esteja', ({ text, result }) => {
    expect(questionTwo(text)).toEqual(result);
  });
});

describe('Questao 3', () => {
  test.each`
  list                | result   
  ${[3, 4, 6, 8, 9]}  | ${6}
  ${[9, 8, 7, 6, 5]}  | ${0}
  ${[1, 8, 7, 6, 5]}  | ${7}
`('deve retornar o maior lucro possivel de $list sendo ele o $result', ({ list, result }) => {
    expect(questionThree(list)).toEqual(result);
  });
});