let btn1 = document.querySelector('#submit1')
let questions1 = document.querySelector('#questions1')
let user_input1 = document.querySelector('#q1input')

var correctAnswers = 0;


$('#submit1').click(function(){
    if ($('#q1input').val() == "ten"){
        const c = document.getElementById('questions1')
        var a = document.getElementById('scores')
    
        console.log("correct")
        c.style.backgroundColor='green';
        document.getElementById('submit1').disabled=true;
        document.getElementById('q1input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';

    
        
        
    } else {
        const c = document.getElementById('questions1')
        console.log("wrong")
        c.style.backgroundColor="red";
    }
})

$('#submit2').click(function () {
    if ($('#q2input').val() == "hydrogen") {
        const c = document.getElementById('questions2')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit2').disabled = true;
        document.getElementById('q2input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions2')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})

$('#submit3').click(function () {
    if ($('#q3input').val() == "venus") {
        const c = document.getElementById('questions3')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit3').disabled = true;
        document.getElementById('q3input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions3')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})

$('#submit4').click(function () {
    if ($('#q4input').val() == "five") {
        const c = document.getElementById('questions4')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit4').disabled = true;
        document.getElementById('q4input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions4')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})

$('#submit5').click(function () {
    if ($('#q5input').val() == "venus") {
        const c = document.getElementById('questions5')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit5').disabled = true;
        document.getElementById('q5input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions5')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})

$('#submit6').click(function () {
    if ($('#q6input').val() == "mars") {
        const c = document.getElementById('questions6')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit6').disabled = true;
        document.getElementById('q6input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions6')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})

$('#submit7').click(function () {
    if ($('#q7input').val() == "jupiter") {
        const c = document.getElementById('questions7')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit7').disabled = true;
        document.getElementById('q7input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions7')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})

$('#submit8').click(function () {
    if ($('#q8input').val() == "the corona") {
        const c = document.getElementById('questions8')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit8').disabled = true;
        document.getElementById('q8input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions8')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})

$('#submit9').click(function () {
    if ($('#q9input').val() == "blue") {
        const c = document.getElementById('questions9')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit9').disabled = true;
        document.getElementById('q9input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions9')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})

$('#submit10').click(function () {
    if ($('#q10input').val() == "gravity") {
        const c = document.getElementById('questions10')
        var a = document.getElementById('scores')

        console.log("correct")
        c.style.backgroundColor = 'green';
        document.getElementById('submit10').disabled = true;
        document.getElementById('q10input').disabled = true;
        a.innerText = 'You have ' + ++correctAnswers + '/10 correct!';


    } else {
        const c = document.getElementById('questions10')
        console.log("wrong")
        c.style.backgroundColor = "red";
    }
})


    


