const res=document.getElementById('res');
function run(){
 let data=matches.value.split("\n").map(x=>+x).filter(x=>x===0||x===1);
 if(!data.length){res.innerText="Enter valid data";return;}
 let wins=data.filter(x=>x===1).length;
 let rate=wins/data.length*100;
 res.innerText=`Win rate: ${rate.toFixed(2)}%`;
}
