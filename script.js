var time=document.querySelector("#one");
var click=document.querySelector("#two");
var score=document.querySelector("#three");
var bottom=document.querySelector("#bottom");
count=60;
var rndno=``;
marks=0;
function bubble(){
  var temp=``;
for(var i=1;i<=232;i++){
    temp=temp+` <div id="cir">${Math.floor(Math.random()*10)}
    </div>`
}
bottom.innerHTML=temp;
}

function settime(){
    setInterval(function(){
        if(count < 0){}
        else{
            time.textContent=count;
            count--;
        }
    },1000)
}

function setclick(){
    rndno=Math.floor(Math.random()*10);
    click.textContent=rndno;
}



function setscore(){
    marks=marks+10;
    score.textContent=marks;
}

bottom.addEventListener("click",function(val){
    var num=Number(val.target.textContent)
    if(num===rndno){
        setscore()
        setclick()
        bubble()
    }
    else{
        setclick()
        bubble()
    }
})
bubble()
settime()
setclick()



