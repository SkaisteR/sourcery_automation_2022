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


// data.forEach(version => {
//   test.describe(version + ': Add', () => {
//     test('Concatenating 2 and 3 results in 23', async ({ page }) => {
//       await page.goto('https://testsheepnz.github.io/BasicCalculator');
//       await page.selectOption('#selectBuild', { label: version});
//       await page.locator('#number1Field').type('2');
//       await page.locator('#number2Field').type('3');
//       await page.selectOption('#selectOperationDropdown', {label: 'Add'});
//       await page.locator('#calculateButton').click();
  
//       await expect(page.locator('#numberAnswerField')).toHaveValue('5');
//     });
//   });
// });

data.forEach(version => {
    test.describe(version+': all elements visible', () => {
        test('Fields (first number, second number, operation, answer, integers only) and buttons (calculate, clear) is visible.', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
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
    test.describe(version+': Add', () => {
        test('Adding 4 and 2 gives answer 6', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Add'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Add', () => {
        test('Adding 2222222222 and 3333333333 gives answer 5555555555', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2222222222')
            await page.locator('#number2Field').type('3333333333')
            await page.selectOption('#selectOperationDropdown', {label: 'Add'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('5555555555');
        })
    })
})

data.forEach(version => {
    test.describe(version+': DivideByZero', () => {
        test('Dividing 8 by 0 should show error', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('8')
            await page.locator('#number2Field').type('0')
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
            
            await expect(page.locator('#errorMsgField')).toBeVisible()
            await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!')
        })
    })
})

data.forEach(version => {
    test.describe(version+': NumberOneNotANumber', () => {
        test('Entering a symbol that is not a number into First Number field should show error', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('A')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Add'});
            await page.locator('#calculateButton').click();
            
            await expect(page.locator('#errorMsgField')).toBeVisible()
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number')
        })
    })
})

data.forEach(version => {
    test.describe(version+': NumberTwoNotANumber', () => {
        test('Entering a symbol that is not a number into Second Number field should show error', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2')
            await page.locator('#number2Field').type('A')
            await page.selectOption('#selectOperationDropdown', {label: 'Add'});
            await page.locator('#calculateButton').click();
            
            await expect(page.locator('#errorMsgField')).toBeVisible()
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number')
        })
    })
})

data.forEach(version => {
    test.describe(version+': Subtract', () => {
        test('Subtracting 2 from 4 gives answer 2', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('2');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Multiply', () => {
        test('Multiplying 2 and 4 gives answer 8', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('8');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Divide', () => {
        test('Dividing 4 by 2 gives answer 2', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('2');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Concatenate', () => {
        test('Concatenating 4 and 2 gives answer 42', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('42');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Add', () => {
        test('Adding -4 and 2 gives answer -2', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Add'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Subtract', () => {
        test('Subtracting 2 from -4 gives answer -6', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Multiply', () => {
        test('Multiplying 2 and -4 gives answer -8', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('-8');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Divide', () => {
        test('Dividing -4 by 2 gives answer -2', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Concatenate', () => {
        test('Concatenating -4 and 2 gives answer -42', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-4')
            await page.locator('#number2Field').type('2')
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('-42');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Integers only', () => {
        test('Adding 1.5 and 1, then selecting "Integers only" should give the answer "2"', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('1.5')
            await page.locator('#number2Field').type('1')
            await page.selectOption('#selectOperationDropdown', {label: 'Add'});
            await page.locator('#calculateButton').click();
            await page.locator('#integerSelect').check();
            await expect(page.locator('#numberAnswerField')).toHaveValue('2');
        })
    })
})

data.forEach(version => {
    test.describe(version+': Clear', () => {
        test('Pressing the "Clear" button should make the answer field empty', async ({page}) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('1')
            await page.locator('#number2Field').type('1')
            await page.selectOption('#selectOperationDropdown', {label: 'Add'});
            await page.locator('#calculateButton').click();
            await page.locator('#clearButton').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('');
        })
    })
})
