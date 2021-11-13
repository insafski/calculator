export class Calculator {
    constructor() {
        this.value = 0;
        this.commandHistory = [];
        this.calculateString = "";
    }

    calculate(calculateString) {
        const result = this.parseCalculateString(calculateString);

        return result;
    }

    parseCalculateString(calculateString) {
        const heapTreeByArray = new SyntaxTree(calculateString);

        function recursiveCalulator(heap) {
            const operator = heap[0];
            let firstStatement = heap[1];
            let secondStatement = heap[2];
        
            if (Array.isArray(firstStatement)) {
                firstStatement = recursiveCalulator(firstStatement);
            }
        
            if (Array.isArray(secondStatement)) {
                secondStatement = recursiveCalulator(secondStatement);
            }
        
            return doOperator(operator, firstStatement, secondStatement);
        }
        
        function doOperator(o, s1, s2) {
            switch (o) {
            case "+":
                return +s1 + +s2;
            case "-":
                return +s1 - +s2;
            case "*":
                return +s1 * +s2;
            case "/":
                return +s1 / +s2;
            default:
                break;
            }
        }

        return recursiveCalulator(heapTreeByArray);
    }

    execute(command) {
        this.value = command.execute(this.value);
        this.commandHistory.push(command);
    }

    undo() {
        const command = this.commandHistory.pop();

        this.value = command.undo(this.value);
    }

    reset() {
        this.value = 0;
    }

    getValue() {
        return this.value;
    }
}

export class Add {
    construct(valueToAdd) {
        this.valueToAdd = valueToAdd;
    }

    execute(value) {
        return value + this.valueToAdd;
    }

    undo(value) {
        return value - this.valueToAdd;
    }
}

export class Subtract {
    construct(valueToSubtract) {
        this.valueToSubtract = valueToSubtract;
    }

    execute(value) {
        return value - this.valueToSubtract;
    }

    undo(value) {
        return value + this.valueToSubtract;
    }
}

export class Multiple {
    construct(valueToMultiple) {
        this.valueToMultiple = valueToMultiple;
    }

    execute(value) {
        return value * this.valueToMultiple;
    }

    undo(value) {
        return value / this.valueToMultiple;
    }
}

export class Divide {
    construct(valueToDivide) {
        this.valueToDivide = valueToDivide;
    }

    execute(value) {
        return value / this.valueToDivide;
    }

    undo(value) {
        return value * this.valueToDivide;
    }
}

//TODO: 
class SyntaxTree {

}
