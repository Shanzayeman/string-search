let line="My name is Shanzay isn't it Shanzay.";
document.getElementById('mbl1').innerHTML= "First mbl is used for locate first word matchig " +
line.indexOf("Shanzay");
document.getElementById('mbl2').innerHTML=
"now the use of index of last will should " + line.lastIndexOf("Shanzay");
document.getElementById('mbl3').innerHTML=
"now it will show if we put some out of line word " + line.indexOf("shanzay");
document.getElementById('mbl4').innerHTML=
"now with the range " + line.lastIndexOf("Shanzay", 20);
document.getElementById('mbl5').innerHTML=
"search works same as indexof " + line.search("Shanzay");
document.getElementById('mbl5').innerHTML=
"other way to concate " + line.search(/Shanzay/);
document.getElementById('mbl6').innerHTML=
line.match("zay");
let baby="Every hi , every bye ,every i love u , u never say to me.";
