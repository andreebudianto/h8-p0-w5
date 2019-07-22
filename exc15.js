function makanTerusRekursif(waktu) {
    count = 1;
    // you can only write your code here!
  if ( waktu <= 0) {
      return 0;
    } else if ( waktu <= 15) {
        return 1;
    } else {
        makanTerusRekursif(waktu-15);
        // console.log(count);
        return count += 1;
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0