function sorting(arrNumber) {
    // code di sini
    var temp = 0;
    var i = 0;      
        while ( i < arrNumber.length-1) {
            if ( arrNumber[i] > arrNumber[i+1]) {
                temp = arrNumber[i];
                arrNumber[i] = arrNumber[i+1];
                arrNumber[i+1] = temp;
                i = 0;
            } else {
                i++;
            }
        } 
        return arrNumber;
  }
  
  function getTotal(arrNumber) {
    // code di sini
        var maxCount = 0;
        var maxNumber = arrNumber[arrNumber.length-1];
        if ( arrNumber.length > 1) {
            for ( var i = 0; i < arrNumber.length; i ++) {
                if ( arrNumber[i] === maxNumber) {
                    maxCount++;
                } 
            } 
            return `angka paling besar adalah ${maxNumber} dan jumlah kemunculan sebanyak ${maxCount} kali`;
        } else {
            return "''";
        }
    
}
    
    function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''