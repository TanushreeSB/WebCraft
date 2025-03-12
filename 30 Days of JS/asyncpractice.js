<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Chai aur code</h1>
    <button id="stop">Stop</button>
</body>
<script>
    const sayHitesh = function(){
        console.log("tanushree");
    }
    const changeText = function(){
        document.querySelector('h1').innerHTML = "best JS series"
    }

    const changeMe = setTimeout(changeText, 2000) // after 2 sec 

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe)
        console.log("STOPPED")
    })
</script>
</html>
