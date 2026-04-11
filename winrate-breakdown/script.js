const res=document.getElementById('res');
function run(){
 let w=+wins.value,g=+games.value;
 if(!w||!g){res.innerText="Enter values";return;}
 res.innerText=`Winrate: ${(w/g*100).toFixed(2)}%`;
}
