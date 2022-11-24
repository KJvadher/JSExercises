/*
    The goal of this exercise is to convert a string to a new string where each character in the new string is "("
    if that character appears only once in the original string, or ")" if that character appears more than once in
    the original string. Ignore capitalization when determining if a character is a duplicate.

    For example:
    "recede"   =>  "()()()"
*/

function duplicateEncode(word) {

    let str= word.toLowerCase()
    str = str.split('');

    let l=str.length;

    let newStr;

    for(let i = 0; i <l; i++)

    {

      flag = false;

      count = 1; //Updates the count again to 1 for every new character

     

          for(let j = i+1; j <l; j++)

          {

              if(str[i] == str[j])

              {

                  count++;

                  str[j] = '0';

                  flag=true;

              }

             

 

          }

              if(flag)

              {str[i]='0';

              }

      }
      for(k=0; k<l;k++)

      {

          if(str[k]=='0')

          str[k]=')';

          else{

            str[k]='('

          }

         

      }

         

arr=str.join("");

return arr

}




 

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.duplicateEncode = duplicateEncode