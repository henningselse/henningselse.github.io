function myFunction() {
    var age = document.getElementById("age").value;
    var lname = document.getElementById("lname").value;
    var fname = document.getElementById("fname").value;
        document.getElementById("demo").innerHTML = "<p>Mitt namn är " + fname + " " + lname + " och jag år " + age + " år gammal</p>";
    }