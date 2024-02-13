# SureGuard.js

## Description
Node library for data validation

## Installation
To install SureGuard.js, use the following npm command:
```bash
npm install sure-guard
```

## Methods

### `NumberValidator`

| Method             | Description                                      | Parameters                   | Return  |
|--------------------|--------------------------------------------------|------------------------------|---------|
| `isNumber`         | Checks if the value is of type number.           | None                         | `this`  |
| `isMinValue`       | Checks if the value is greater than or equal to a minimum.| `minValue: number`        | `this`  |
| `isMaxValue`       | Checks if the value is less than or equal to a maximum.| `maxValue: number`        | `this`  |
| `isPositive`       | Checks if the value is positive.                 | None                         | `this`  |
| `isNegative`       | Checks if the value is negative.                 | None                         | `this`  |
| `isInteger`        | Checks if the value is an integer number.        | None                         | `this`  |
| `getResult`        | Returns the result of the validation.            | None                         | `boolean`|

### `StringValidator`

| Method             | Description                                      | Parameters                   | Return  |
|--------------------|--------------------------------------------------|------------------------------|---------|
| `isString`         | Checks if the value is of type string.           | None                         | `this`  |
| `isMaxSize`        | Checks if the string size is less than or equal to a maximum.| `maxSize: number`     | `this`  |
| `isMinSize`        | Checks if the string size is greater than or equal to a minimum.| `minSize: number` | `this`  |
| `isEmail`          | Checks if the string is a valid email address.   | None                         | `this`  |
| `isAlphanumeric`   | Checks if the string contains only alphanumeric characters.| None              | `this`  |
| `getResult`        | Returns the result of the validation.            | None                         | `boolean`|

## Usage Example

```javascript
const { validator } = require('sure-guard');

const result1 = validator('hello').string().isEmail().getResult();
// result1 === false

const result2 = validator(123).number().isPositive().getResult();
// result2 === true
```

## Contributing
If you wish to contribute to SureGuard.js, please follow these steps:
1. Fork the project.
2. Create a branch for your contribution (`git checkout -b feature/new-feature`).
3. Make your desired changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to your branch (`git push origin feature/new-feature`).
6. Open a pull request.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.
