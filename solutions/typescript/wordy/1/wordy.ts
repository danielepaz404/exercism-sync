export const answer = (statement: string) : number => {
  const numbers = extractNumbers(statement);
  const qtyNumbers = numbers.length;
  const operators = extractOperators(statement);
  const qtyOperators = operators.length;

  if(validate(statement)){
    if(qtyNumbers === 1){
      return Number(numbers[0]);
    } 

    const result: number = applyOperation(Number(numbers[0]), Number(numbers[1]), operators[0]);

    if(qtyOperators > 1) {
      return applyOperation(result, Number(numbers[2]), operators[1]);
    } else {
      return result;
    }
  
  } else {
    if(statement.indexOf('cubed') != -1){
      throw new Error("Unknown operation");
    }
    
    if(qtyNumbers > 0 || statement.indexOf('What is') != -1) {
      throw new Error("Syntax error");
    }
    
    throw new Error("Unknown operation");
  }
}

function validate(statement: string) : boolean {
  const regex = new RegExp(/^What is -?[0-9]+(?: (?:plus|minus|multiplied by|divided by) -?[0-9]+)*\?$/);
  return regex.test(statement);
}

function extractNumbers (statement: string) : string[] {
  const numbersRegex = new RegExp(/-?\d+/g);
  const match = statement.match(numbersRegex) || [];
  return [...match];
}

function extractOperators (statement: string) : string[] {
  const operatorsRegex = new RegExp(/plus|minus|multiplied by|divided by/g);
  const match = statement.match(operatorsRegex) || [];
  return [...match];
}

function applyOperation (number1: number, number2: number, operator: string) : number  {
   switch (operator) {
      case 'plus':
          return number1 + number2;
          break;
      case 'minus': 
          return number1 - number2;
          break;
      case 'multiplied by':
          return number1 * number2;
          break;
      case 'divided by':
          return number1 / number2;
          break;
      default:
          throw new Error("Syntax error");
          break;
   }
}