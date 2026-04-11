const res=document.getElementById('res');
function run(){
 let s=+score.value,t=+time.value;
 if(!s||!t){res.innerText="Enter values";return;}
 res.innerText=`Score/min: ${(s/t).toFixed(2)}`;
}
