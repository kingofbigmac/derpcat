## Welcome to Idle Realm

<p>Dig For Gold!</p>
<button type="button" onclick="myFunction()">Count!</button>
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
