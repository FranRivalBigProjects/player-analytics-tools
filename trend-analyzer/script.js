const res=document.getElementById('res');
function run(){
 let arr=data.value.split("\n").map(x=>+x).filter(x=>!isNaN(x));
 if(arr.length<2){res.innerText="Enter data";return;}
 let trend=arr[arr.length-1]-arr[0];
 res.innerText=trend>0?"Improving":"Declining";
}
