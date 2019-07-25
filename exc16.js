function totalDigitRekursif(angka) {
  // you can only write your code here!
    var convStr = angka.toString();
    if ( convStr.length === 0) {
        return 0;
    } else {
        angka = convStr.slice(1);
        return Number(convStr[0]) + totalDigitRekursif(angka);
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5