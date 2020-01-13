var localData = localStorage.getItem("highscore");
var arrLocalData = localData.slice(0, -1).split(',');
var i = 1;
var a = 0;

arrLocalData.forEach(function(num){
    var ele = document.createElement('p');
    var numString = i.toString();
    ele.innerText = i+'. '+num;
    document.getElementById("form2").appendChild(ele);
    i++;
})

document.getElementById("clear").addEventListener("click", function(){
    localStorage.clear();
    arrLocalData.forEach(function(num){
        var list = document.getElementsByTagName("p");
        list[a].remove();
        a++;
    })
});

function clearHS(){
    
}