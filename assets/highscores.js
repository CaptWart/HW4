var localData = localStorage.getItem("highscore");
var arrLocalData = localData.slice(0, -1).split(',');
var i = 1;
console.log(arrLocalData);

arrLocalData.forEach(function(num){
    var ele = document.createElement('p');
    var numString = i.toString();
    console.log(num);
    ele.innerText = i+'. '+num;
    document.getElementById("form2").appendChild(ele);
    i++;
})