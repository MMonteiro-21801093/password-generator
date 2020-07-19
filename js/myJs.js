function checkPassStrength(pass) {
 
  var score = scorePassword(pass);
  if (score > 80){
    document.getElementById('modal-text').innerHTML  = "strong password";
    return;
  }
     
  if (score > 60){
    document.getElementById('modal-text').innerHTML  = "good password";
    return;
   }
  
  if (score >= 30){
    document.getElementById('modal-text').innerHTML  = "weak password";
    return;
   }else{
    document.getElementById('modal-text').innerHTML  = "weak password";
   }
 
}

function scorePassword(pass) {
  var score = 0;
  if (!pass)
      return score;

  // award every unique letter until 5 repetitions
  var letters = new Object();
  for (var i=0; i<pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1;
      score += 5.0 / letters[pass[i]];
  }

  // bonus points for mixing it up
  var variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass),
  }

  variationCount = 0;
  for (var check in variations) {
      variationCount += (variations[check] == true) ? 1 : 0;
  }
  score += (variationCount - 1) * 10;

  return parseInt(score);
}
function passwordGenerator( len ) {
  var length = (len)?(len):(10);
  var string = "abcdefghijklmnopqrstuvwxyz";
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  var crunch = true;
  while( password.length<length ) {
      entity1 = Math.ceil(string.length * Math.random()*Math.random());
      entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
      entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
      hold = string.charAt( entity1 );
      hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
      character += hold;
      character += numeric.charAt( entity2 );
      character += punctuation.charAt( entity3 );
      password = character;
  }
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  console.log( password.substr(0,len));
  document.getElementById('pwd').value = password.substr(0,len);
}
