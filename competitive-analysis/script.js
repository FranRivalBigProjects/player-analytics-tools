const res=document.getElementById('res');
function run(){
 let w=+wins.value,l=+losses.value;
 if(!w||!l){res.innerText="Enter values";return;}
 let ratio=w/(w+l);
 res.innerText=ratio>0.5?"Positive performance":"Needs improvement";
}
