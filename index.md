## Welcome to Idle Realm

<p>Dig For Gold!</p>
<button type="button" onclick="myFunction()">Dig!</button>
<p id="demo">0</p>
<script>
var add = (function () {
    var counter = 0;
    return function () {return counter += 0.1;}
})();

function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
</script>
