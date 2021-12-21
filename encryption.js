const input1 = prompt('Enter new key');
let encryptedMessage = input1;
const array1 = [];
for (var i = 0; i < encryptedMessage.length; i++) {
    array1[i]= encryptedMessage.charAt(i);
    console.log(array1[i]);
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

let encryptCode = makeid(encryptedMessage.length);
alert('Encryption code is ' +encryptCode +' save it for next time');
console.log('Encryption code is '+encryptCode );


const input = prompt('Insert encryption code to descrypt');

if (encryptCode === input){
    alert('Descryption successful');
}
else{
    alert('Error, insert the right code');
}