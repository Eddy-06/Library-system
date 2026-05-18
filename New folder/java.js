<!DOCTYPE html>
<html>
<head>
    <title>Display Names</title>
</head>
<body>

<h2>List of Names</h2>
<ul id="nameList"></ul>

<script>
let names = ["Alice", "Bob", "John", "Emma"];

let list = document.getElementById("nameList");

for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.textContent = names[i];
    list.appendChild(li);
}
</script>

</body>
</html>