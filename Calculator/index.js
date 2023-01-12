
var buttons=document.querySelectorAll(".btn");
let string=" " ;

Array.from(buttons).forEach((btn)=>{

  if(btn.addEventListener("click",(event)=>{

  var ButtonInnerHtml = event.target.innerHTML;
  var cal=document.querySelector('input');


  if(ButtonInnerHtml=='='){
    string=eval(string);
    cal.value=string;
  }
  else if(ButtonInnerHtml=='C' || ButtonInnerHtml=='CE'){
    string=" ";
    cal.value=string;
  }
  else if(ButtonInnerHtml== '1/x'){
    string=1/string;
    cal.value=string;
  }
  else if(ButtonInnerHtml== '+/-'){
    string=-1*string;
    cal.value=string;
  }
  else if(ButtonInnerHtml== '!'){
  let  fact=1;
  for(let i=1;i<=string;i++){
    fact=fact*i;
  }

    cal.value=fact;
  }
  else if(ButtonInnerHtml== 'x<sup>2</sup>'){
    string=string*string;
    cal.value=string;
  }

else{
  string = string + ButtonInnerHtml;
    cal.value=string;
}



}));

//   btn.addEventListener("keypress",(event)=>{
// console.log(event.target);
//   var ButtonInnerHtml = event.target.innerHTML;
//   var cal=document.querySelector('input');
//
//
//   if(ButtonInnerHtml=='='){
//     string=eval(string);
//     cal.value=string;
//   }
//   else if(ButtonInnerHtml=='C' || ButtonInnerHtml=='CE'){
//     string=" ";
//     cal.value=string;
//   }
//   else if(ButtonInnerHtml== '1/x'){
//     string=1/string;
//     cal.value=string;
//   }
//   else if(ButtonInnerHtml== '+/-'){
//     string=-1*string;
//     cal.value=string;
//   }
//   else if(ButtonInnerHtml== '!'){
//   let  fact=1;
//   for(let i=1;i<=string;i++){
//     fact=fact*i;
//   }
//
//     cal.value=fact;
//   }
//   else if(ButtonInnerHtml== 'x<sup>2</sup>'){
//     string=string*string;
//     cal.value=string;
//   }
//
// else{
//   string = string + ButtonInnerHtml;
//     cal.value=string;
// }
//
//
//
// });

});
