/*
https://javascript.info/type-conversions
https://javascript.info/object-toprimitive
*/

/*
String Conversion
- Occurs when we output something
- Can be performed with String(value)
- usually obvious for primitive values
*/
console.log("String Conversion");

console.log(String(undefined));
console.log(String(null));
console.log(String(NaN));
console.log(typeof String(true));
console.log(typeof new String(true));

/*
Numeric Conversion
- Occurs in math operations
- Can be performed with Number(value)
- Rules:
-- undefined -> NaN
-- null -> 0
-- true and false -> 1 and 0
-- string -> Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is 
empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
*/
console.log("Numeric Conversion");

const divideA = "6" / true;
console.log(divideA);
console.log(typeof divideA);

console.log(Number("     \n"));
console.log(Number("    1    \t"));
console.log(Number("  h1  \n"));

/*
Boolean Conversion
- Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false. Other values become true.
*/
console.log("Boolean Conversion");

if (!undefined) {
  console.log(true);
}

console.log(Boolean("  "));
console.log(Boolean("0"));
console.log(Boolean(0));
