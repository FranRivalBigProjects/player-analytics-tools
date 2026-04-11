const res=document.getElementById('res');
function run(){
 let k=+kills.value,d=+deaths.value,a=+assists.value;
 if(!k||!d||!a){res.innerText="Enter values";return;}
 res.innerText=`KDA: ${((k+a)/d).toFixed(2)}`;
}
