    const html        = document.getElementById("text-1");
    const css         = document.getElementById('text-2');
    const js          = document.getElementById('text-3');
    const PHP         = document.getElementById('text-4');
    const score       = document.getElementById('text-5');
    const average     = document.getElementById("text-6");
    const text        =  document.createTextNode("You can't Input Value More than 50 for HTML");
    const text1       = document.createTextNode("You can't Input Value More than 50 for CSS");
    const text2       = document.createTextNode("You can't Input Value More than 50 for JavaScript");
    const text3       = document.createTextNode("You can't Input Value More than 50 for PHP");
    const h1          = document.createElement("h1");
    const h2          = document.createElement("h2");
    const h3          = document.createElement("h3");
    const h4          = document.createElement("h4");
    const input       = document.getElementsByTagName("input")[0];
    const input1      = document.getElementsByTagName("input")[1];
    const input2      = document.getElementsByTagName("input")[2];
    const input3      = document.getElementsByTagName("input")[3];
    
const getTotal = ()=>{
score.value = parseFloat(html.value) + parseFloat(css.value) + parseFloat(js.value) + parseFloat(PHP.value);
 if (score.value == 200 || score.value == 196) 
 {
   average.value = "A";
 } 
 else if (score.value == 192 || score.value == 188) 
 {
   average.value = "B";
 }
 else if(score.value == 184 || score.value == 180)
 {
   average.value = "C";
 }
 else if(score.value == 176 || score.value == 172 ) 
 {
 average.value = "D";
}

}
html.addEventListener('keyup',()=>{
    if(html.value >=100){
        h1.appendChild(text);
        h1.style.color ='red';
        h1.style.fontSize = '15px';
    }
    
    getTotal();
});
input.addEventListener('keydown', function(event) { // Input Field For HTML 
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace" || key === "Delete") {
      h1.removeChild(text);
    }
    

});

css.addEventListener('keyup',()=>{
    if (css.value >= 100) {
      h2.appendChild(text1);
      h2.style.color = "blue";
      h2.style.fontSize = "15px";
    }
getTotal();
});
  input1.addEventListener('keydown', function (event) { // input Field for CSS
    const key = event.key;
    if (key === "Backspace" || key === "Delete") {
      h2.removeChild(text1);
    }
  });

js.addEventListener('keyup',()=>{
  if(js.value >= 100)
  {
    h3.appendChild(text2);
    h3.style.color = "#f0db4f";
    h3.style.fontSize = "15px";
  }
getTotal();
});
input2.addEventListener('keydown',(event)=>{
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    h3.removeChild(text2);
  }
})
PHP.addEventListener('keyup',()=>{
  if(PHP.value >= 100)
  {
    h4.appendChild(text3);
    h4.style.color = "purple";
    h4.style.fontSize = "15px";
  }
getTotal();
input3.addEventListener('keydown',(event)=>{
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    h4.removeChild(text3);
  }
})
});

// keydown ចុច
// keyup វាយ
document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(h3);
document.body.appendChild(h4);
document.body.appendChild(h5);


