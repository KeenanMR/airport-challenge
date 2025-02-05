const chalk = require("chalk");
const { assertStrictEqual, assertIsUndefined } = require("./test-framework");
const { Airport } = require("../src/Airport");
const { Plane } = require("../src/Plane");

let input, result, actual, expected;

//Story 2 Test - Override airport capacity
Test = () => {

    console.log(chalk.cyan(`User Story 2: Override the default airport capacity`))
    console.log(chalk.cyan(`User Story 2 Test 1: Allow the user to specify a capacity when an airport is created`))
    console.log(chalk.cyan(`User Story 2 Pass Criteria: The capacity of an airport should be not be undefined`))
    console.log(``);
    //Arrange
    expected = false;
    airport = new Airport(5);

    //Act
    actual = assertIsUndefined(airport.getCapacity());

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 2 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

//Story 2  2 - Override airport capacity
Test2 = () => {

    console.log(chalk.cyan(`User Story 2: Override the default airport capacity`))
    console.log(chalk.cyan(`User Story 2 Test 2: Allow the user to change the capacity after an airport is created`))
    console.log(chalk.cyan(`User Story 2 Pass Criteria: The capacity of an airport be 10`))
    console.log(``);

    //Arrange
    expected = 10;
    input = 10
    airport = new Airport(5);

    //Act
    airport.setCapacity(input);
    actual = airport.getCapacity();

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 2 Test 2 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test3 = () => {

    console.log(chalk.cyan(`User Story 2: Override the default airport capacity`))
    console.log(chalk.cyan(`User Story 2 Test 3: Do not allow the user to set a negative capacity`))
    console.log(chalk.cyan(`User Story 2 Pass Criteria: The capacity of an airport be 5`))
    console.log(``);

    //Arrange
    expected = 5;
    input = -1;
    airport = new Airport(5);

    //Act
    airport.setCapacity(input);
    actual = airport.getCapacity();

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 2 Test 3 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}



Test();
Test2();
Test3();

