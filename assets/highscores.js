var localData = localStorage.getItem("highscore");
var arrLocalData = localData.slice(0, -1).split(',');

console.log(arrLocalData);

arrLocalData.forEach(function(num){
    var ele = document.createElement('p');
    console.log(num);
    ele.innerText = num;
    document.body.appendChild(ele);
})