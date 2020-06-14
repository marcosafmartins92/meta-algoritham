const questionOne = (list, target) => {
  let result = [];
  list.every((firstNumber, firstIndex) => {
    list.every((secondNumber, secondIndex) => {
      if(firstNumber + secondNumber === target) {
        result = [firstIndex, secondIndex];
      }
      return result.length !== 2;
    })
    return result.length !== 2;
  })
  return result;
}

const questionTwo = (text) => {
  const regexOpen = /(\[|\(|\{)/g;
  const regexClose = /(\]|\)|\})/g;
  let result = 'Sim';
  const open = text.match(regexOpen);
  const close = text.match(regexClose);
  if(open.length !== close.length) {
    result = 'Não';
  } else {
    close.every((char, i) => {
      switch(char) {
        case '}':
          result = open[open.length - (i+1)] === '{' ? 'Sim' : 'Não';
          break;
        case ']':
          result = open[open.length - (i+1)] === '[' ? 'Sim' : 'Não';
          break;
        case ')':
          result = open[open.length - (i+1)] === '(' ? 'Sim' : 'Não';
          break;
        default: 
          result = 'Sim';
      }
      return result !== 'Sim';
    })
  }

  return result;

}

const questionThree = (list) => {
  let result = 0;
  list.forEach((firstValue, firstIndex) => {
    list.forEach((secondValue, secondIndex) => {
      const difference = secondValue - firstValue;
      if(difference > result && firstIndex < secondIndex) {
        result = difference;
      }
    });
  });
  return result;
}

module.exports = {questionOne, questionTwo, questionThree};