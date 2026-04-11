const res=document.getElementById('res');
function run(){
 let k=+kills.value,d=+deaths.value;
 if(!k||!d){res.innerText="Enter values";return;}
 res.innerText=`K/D: ${(k/d).toFixed(2)}`;
}
