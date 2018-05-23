## Welcome to Idle Realm
Total Gold:


<p>Dig For Gold!</p>
<button type="button" onclick="myFunction()">Dig!</button>
<p id="demo">0</p>
<script>
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
</script>

<p>Hire a worker</p>

<button type="button" onclick="myFunction()">Hire!</button>
<p id="worker">0</p>
<script>
var add = (function () {
    var counter1 = 0;
    return function () {return counter += 1;}
})();

function myFunction(){
    document.getElementById("worker").innerHTML = add();
}
</script>
