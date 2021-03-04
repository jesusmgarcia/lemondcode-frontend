
// Function to see the whitespaces in Chrome console
function showColCon(input) {
  console.log("%c" + input, "background-color: green");
}

function reverseText1(text) {
  return text.split(" ").reverse().join(" ");
};

console.group("reverseText1");
showColCon(reverseText1(""));
showColCon(reverseText1(" "));
showColCon(reverseText1("Uno dos tres"));
showColCon(reverseText1("  Uno   dos   tres   "));
showColCon(reverseText1("Uno dos tres cuatro cinco"));
console.groupEnd();

function reverseText2(text) {
  return text.trim().split(" ").reverse().join(" ");
};

console.group("reverseText2");
showColCon(reverseText2(""));
showColCon(reverseText2(" "));
showColCon(reverseText2("Uno dos tres"));
showColCon(reverseText2("  Uno   dos   tres   "));
showColCon(reverseText2("Uno dos tres cuatro cinco"));
console.groupEnd();

function reverseText3(text) {
  return text.trim().split(/\s+/).reverse().join(" ");
};

console.group("reverseText3");
showColCon(reverseText3(""));
showColCon(reverseText3(" "));
showColCon(reverseText3("Uno dos tres"));
showColCon(reverseText3("  Uno   dos   tres   "));
showColCon(reverseText3("Uno dos tres cuatro cinco"));
console.groupEnd();
