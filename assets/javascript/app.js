$(function () {

    var data = [
        {
            q: "In Aladdin, what is the name of Jasmine’s pet tiger?",
            a: ["Nala", "Kaizer", "Rajah", "Simba"],
            r: 2,
        },
        {
            q: "Which actor supplied the voice of Mushu in Mulan?",
            a: ["Eddie Murphy", "Jay-Z", "Tupac", "Will Smith"],
            r: 0,
        },
        {
            q: "Which princess attempts to disguise herself as a man?",
            a: ["Belle", "Ariel", "Merida", "Mulan"],
            r: 3,
        },
        {
            q: "Who was the first Disney princess based on a real historical figure?",
            a: ["Mulan", "Pocahontas", "Cinderalla", "Aurora"],
            r: 1,
        },
        {
            q: "I'll Make  Man Out of You was a song in which 1998 Disney animation?",
            a: ["Frozen", "Mulan", "Beauty & the Beast", "Aladdin"],
            r: 1,
        },
        {
            q: "Tangled is based on which of the Grimms' fairy tales?",
            a: ["Snow White", "Cinderella", "Rapunzel", "Sleeping Beauty"],
            r: 2,
        },
        {
            q: "In Toy Story, what is written on Andy's toys?",
            a: ["Boo", "Hello", "Andy", "Love"],
            r: 2,
        },
        {
            q: "Who did Lilo tell Stitch was the model citizen?",
            a: ["Trump", "Elvis", "Kanye", "Queen"],
            r: 1,
        },
        {
            q: "What did Jumba Jookiba name Stitch?",
            a: ["Experiment 696 ", "Experiment 007 ", "Experiment 101 ", "Experiment 626 "],
            r: 3,
        },
        {
            q: "Which movie is this quote from? OHANA means family, Family means no one gets left behind",
            a: ["Lilo & Stitch", "Frozen", "Toy Story", "Finding Nemo"],
            r: 0,
        },
    ]


    var score = 0;
    var count = 60;//timer is 60 sec
    var counter;
    var i;
    var userAnswers = {
        question_0_answers: 0,
        question_1_answers: 0,
        question_2_answers: 0,
        question_3_answers: 0,
        question_4_answers: 0,
        question_5_answers: 0,
        question_6_answers: 0,
        question_7_answers: 0,
        question_8_answers: 0,
        question_9_answers: 0,

    }

    var answerKey = {
        question_0_answers: 2,
        question_1_answers: 0,
        question_2_answers: 3,
        question_3_answers: 1,
        question_4_answers: 1,
        question_5_answers: 2,
        question_6_answers: 2,
        question_7_answers: 1,
        question_8_answers: 3,
        question_9_answers: 0,
    }

    $(".btn").on('click', function () {//when i clock on the start button
        counter = setInterval(timer, 1000);//starts timern
        $(".btn").hide();//hides the start button when timer starts


        for (i = 0; i < data.length; i++) {
            $("#questions").append(`<p>${data[i].q}</p>`)
            $("#questions").append(`<form id="question_${i}"></form>`)
            $(`#question_${i}`).append(`<input type="radio" name="question_${i}_answers" value="0">${data[i]["a"][0]}`)
            $(`#question_${i}`).append(`<input type="radio" name="question_${i}_answers" value="1">${data[i]["a"][1]}`)
            $(`#question_${i}`).append(`<input type="radio" name="question_${i}_answers" value="2">${data[i]["a"][2]}`)
            $(`#question_${i}`).append(`<input type="radio" name="question_${i}_answers" value="3">${data[i]["a"][3]}`)
        
            // var userAnswers = [4, 2, 1]
            // var correctAnswers = [3, 2, 1]
            // correct++
            $(`#question_${i}`).change(function(e){
                console.log(e)

                //e.target.name === question_0 etc
                var selected_value = $(`input[name="${e.target.name}"]:checked`).val();
                
                //userAnswers["question_0"] which is the same as userAnswers.question_0 
                userAnswers[e.target.name] = selected_value


                console.log(userAnswers);
            });


            console.log(data[i].q)

            document.onkeyup = function(event) {
                userAnswers = event.key;
        
                if(userAnswers === answerKey){
                    score++;
                }
              }

        }
    });
    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }
        document.getElementById("display").innerHTML = count + " secs";//display timer to html
    }
    function compare(userAnswers, answerKey) {
        return JSON.stringify(userAnswers) === JSON.stringify(answerKey);
      }
      compare(userAnswers, answerKey);

});

