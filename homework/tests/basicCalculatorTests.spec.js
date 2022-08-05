// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

test.beforeEach(async ({page}, testInfo) => {
    const version = testInfo.titlePath[1].substring(0, testInfo.titlePath[1].lastIndexOf(':'));
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
} )

data.forEach(version => {
    test.describe(version+': all elements visible', () => {
        test('Fields (first number, second number, operation, answer, integers only) and buttons (calculate, clear) is visible.', async ({page}) => {
            await expect(page.locator('#number1Field')).toBeVisible()
            await expect(page.locator('#number2Field')).toBeVisible()
            await expect(page.locator('#selectOperationDropdown')).toBeVisible()
            await expect(page.locator('#calculateButton')).toBeVisible()
            await expect(page.locator('#numberAnswerField')).toBeVisible()
            await expect(page.locator('#integerSelect')).toBeVisible()
        })
    })
})

data.forEach(version => {
    const number1 = '4'
    const number2 = '2'
    const result = '6'
    const number21 = '2222222222'
    const number22 = '3333333333'
    const result2 = '5555555555'

    test.describe(version+': Add', () => {
        test('Adding two numbers gives correct answer', async ({page}) => {
            await selectAddition(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);

            await enterNumbersAndCalculate(page, number21, number22)
            await checkResult(page, result2);
        })
    })
})


data.forEach(version => {
    const number1 = '8'
    const number2 = '0'

    test.describe(version+': DivideByZero', () => {
        test(`Dividing ${number1} by ${number2} should show error`, async ({page}) => {
            await selectDivision(page);
            await enterNumbersAndCalculate(page, number1, number2)

            await expect(page.locator('#errorMsgField')).toBeVisible()
            await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!')
        })
    })
})

data.forEach(version => {
    test.describe(version+': NumberOneNotANumber', () => {
        const number1 = 'A'
        const number2 = '2'

        test('Entering a symbol that is not a number into First Number field should show error', async ({page}) => {
            await selectAddition(page)
            await enterNumbersAndCalculate(page, number1, number2)

            await expect(page.locator('#errorMsgField')).toBeVisible()
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number')
        })
    })
})

data.forEach(version => {
    test.describe(version+': NumberTwoNotANumber', () => {
        const number1 = '2'
        const number2 = 'A'

        test('Entering a symbol that is not a number into Second Number field should show error', async ({page}) => {
            await selectAddition(page)
            await enterNumbersAndCalculate(page, number1, number2)

            await expect(page.locator('#errorMsgField')).toBeVisible()
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number')
        })
    })
})

data.forEach(version => {
    const number1 = '4'
    const number2 = '2'
    const result = '2'

    test.describe(version+': Subtract', () => {
        test(`Subtracting ${number2} from ${number1} gives answer ${result}`, async ({page}) => {
            await selectSubtraction(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '4'
    const number2 = '2'
    const result = '8'

    test.describe(version+': Multiply', () => {
        test(`Multiplying ${number1} and ${number2} gives answer ${result}`, async ({page}) => {
            await selectMultiplication(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '4'
    const number2 = '2'
    const result = '2'

    test.describe(version+': Divide', () => {
        test(`Dividing ${number1} by ${number2} gives answer ${result}`, async ({page}) => {
            await selectDivision(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '4'
    const number2 = '2'
    const result = '42'

    test.describe(version+': Concatenate', () => {
        test(`Concatenating ${number1} and ${number2} gives answer ${result}`, async ({page}) => {
            await selectConcatenation(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '-4'
    const number2 = '2'
    const result = '-2'

    test.describe(version+': Add', () => {
        test(`Adding ${number1} and ${number2} gives answer ${result}`, async ({page}) => {
            await selectAddition(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '-4'
    const number2 = '2'
    const result = '-6'

    test.describe(version+': Subtract', () => {
        test(`Subtracting ${number2} from ${number1} gives answer ${result}`, async ({page}) => {
            await selectSubtraction(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '2'
    const number2 = '-4'
    const result = '-8'

    test.describe(version+': Multiply', () => {
        test(`Multiplying ${number1} and ${number2} gives answer ${result}`, async ({page}) => {
            await selectMultiplication(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '-4'
    const number2 = '2'
    const result = '-2'

    test.describe(version+': Divide', () => {
        test(`Dividing ${number1} by ${number2} gives answer ${result}`, async ({page}) => {
            await selectDivision(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '-4'
    const number2 = '2'
    const result = '-42'

    test.describe(version+': Concatenate', () => {
        test(`Concatenating ${number1} and ${number2} gives answer ${result}`, async ({page}) => {
            await selectConcatenation(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '1'
    const number2 = '1'
    const result = '2'

    test.describe(version+': Integers only', () => {
        test(`Adding ${number1} and ${number2}, then selecting "Integers only" should give the answer "${result}"`, async ({page}) => {
            await selectAddition(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await page.locator('#integerSelect').check();
            await checkResult(page, result);
        })
    })
})

data.forEach(version => {
    const number1 = '1'
    const number2 = '1'
    const result = ''

    test.describe(version+': Clear', () => {
        test('Pressing the "Clear" button should make the answer field empty', async ({page}) => {
            await selectAddition(page)
            await enterNumbersAndCalculate(page, number1, number2)
            await checkResult(page, result);
        })
    })
})

async function selectAddition(page) {
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
}

async function selectSubtraction(page) {
    await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
}

async function selectMultiplication(page) {
    await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
}

async function selectDivision(page) {
    await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
}

async function selectConcatenation(page) {
    await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
}

async function enterNumbersAndCalculate(page, number1, number2){
    await page.locator('#number1Field').type(number1)
    await page.locator('#number2Field').type(number2)
    await page.locator('#calculateButton').click();
}

async function checkResult(page, expectedResult){
    await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
}