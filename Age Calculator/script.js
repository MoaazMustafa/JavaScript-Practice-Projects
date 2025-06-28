let userinput = document.querySelector("#date");
userinput.max = new Date().toISOString().split('T')[0];
let result = document.querySelector(".result");

function calculateAge(){
    let birthDate = new Date(userinput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1 ;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1 ;
    let y2 = today.getFullYear();

    let d3 , m3 , y3 ;
     
    y3 = y2 - y1 ;
     if (m2 >= m1){
        m3 = m2-m1;
     }
     else{
        y3--;
        m3 = 12 + m2 - m1;
     }

      if (d2 >= m1){
        d3 = d2-d1;
     }
     else{
        m3--;
        d3 = getDAysInMOnth(y1,m1) + d2- d1;
     }
      if (m3< 0){
           m3 = 11;
           y3--;
      }
      let years ,months ,days;
      if (y3 > "0"){
         if (y3== "1"){
            years = `<span>${y3}</span> year,`;
         }
         else{
            years =`<span>${y3}</span> years,`;
         }
      }
      else{
        years = "";
      }
      if (m3 > "0"){
         if (m3== "1"){
            months = `<span>${m3}</span> month & `;
         }
         else{
            months =`<span>${m3}</span> months & `;
         }
      }
      else{
        months = " ";
      }
       if (d3 > "0"){
         if (d3== "1"){
            days = `<span>${d3}</span> day`;
         }
         else{
            days =`<span>${d3}</span> days`;
         }
      }
      else{
        days = "";
      }
   result.innerHTML = `You are ${years} ${months} ${days} old  `;
}
function getDAysInMOnth(year,month){
    return new Date(year, month, 0).getDate();
}
