function checkNumber() {
    let number = parseInt(document.getElementById("num").value);

        if (number % 2 === 0) {
                document.getElementById("result").innerHTML =
                    number + " is Even";
        } else {
                document.getElementById("result").innerHTML =
                    number + " is Odd";
        }
}