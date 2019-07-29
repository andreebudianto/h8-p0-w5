function changeVocals (str) {
    //code di sini
    var strArr= [];
    for (var i = 0; i < str.length; i++) {
      strArr.push(str[i]);
    }
    
    var vocal = 'aiueoAIUEO';
    var smallAlf = 'abcdefghijklmnopqrstuvwxyz';
    var bigAlf = smallAlf.toUpperCase();
    var allAlf = smallAlf+bigAlf;
    
    for (var i = 0; i < strArr.length; i++) {
      for (var j = 0; j < vocal.length; j++) {
        if ( strArr[i] === vocal[j]) {
          for( var k = 0; k < allAlf.length; k++) {
            if (strArr[i] === allAlf[k]) {
              strArr[i] = allAlf[k+1];
              break;
            }
          }
        }
      }
    } 
    return strArr;
  }
  
  function reverseWord (str) {
    //code di sini
    var base =  changeVocals(str);
    var result = [];
    for ( var i = base.length-1; i >= 0; i --) {
      result.push(base[i]);
    }
    return result;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var base = reverseWord(str);
    var hurufKecil = 'abcdefghijklmnopqrstuvwxyz';
    var hurufBesar = hurufKecil.toUpperCase();
    for ( var i = 0; i < base.length; i ++) {
      for ( var j = 0; j < hurufKecil.length; j++) {
        if ( base[i] === hurufKecil[j]) {
          base[i] = base[i].toUpperCase();
          break;
        } else if ( base[i] === hurufBesar[j]) {
          base[i] = base[i].toLowerCase();
          break;
        }
      }
    }
    return base;
  }
  
  function removeSpaces (str) {
    //code di sini
    var base = setLowerUpperCase (str);
    var result = '';
    if ( base.length <= 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
      for ( var i = 0; i < base.length; i ++ ) {
        if ( base[i] !== ' ') {
          result += base[i];
        }
      }
      return result;
    }
  }
  
  function passwordGenerator (name) {
    //code di sini
    return (removeSpaces(name));
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'