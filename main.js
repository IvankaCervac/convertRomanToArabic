/* 
Să se scrie cu cifre arabe un număr cu cifre romane
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Input: s = "MMII"
Output: 2002
*/

function convertRomanToArabic(s) {
    let arabicNumeral = 0;
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case "I":
          arabicNumeral += 1;
          break;
        case "V":
          arabicNumeral += 5;
          break;
        case "X":
          arabicNumeral += 10;
          break;
        case "L":
          arabicNumeral += 50;
          break;
        case "C":
          arabicNumeral += 100;
          break;
        case "D":
          arabicNumeral += 500;
          break;
        case "M":
          arabicNumeral += 1000;
          break;
        default:
          return "Numărul roman conține simboluri invalide!";
      }
    }
    return arabicNumeral;
  }
  
  // Exemplu de utilizare
  console.log(convertRomanToArabic("MMII"));