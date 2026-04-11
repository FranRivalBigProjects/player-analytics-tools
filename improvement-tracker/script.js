const res=document.getElementById('res');
function run(){
 let s=+start.value,c=+current.value;
 if(!s||!c){res.innerText="Enter values";return;}
 let diff=c-s;
 res.innerText=`Improvement: ${diff}`;
}
