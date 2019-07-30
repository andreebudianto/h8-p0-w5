function kaliTerusRekursif(angka) {
  // you can only write your code here!
    var angkaToStr = angka.toString();
    if ( angkaToStr.length === 1 ) {
        return angka = Number(angkaToStr[0]);
    } else if ( angkaToStr.length > 1) {
        angka = angkaToStr.slice(1);
        result = angkaToStr[0] * kaliTerusRekursif(angka);
    }
    strResult = result.toString();
    if (strResult.length === 1) {
        return result;
    } else if (strResult.length > 1) {
        angka = result;
        return kaliTerusRekursif(angka);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6