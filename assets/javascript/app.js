$(function () {

    var data = [
        {
            q: "1.In Aladdin, what is the name of Jasmine’s pet tiger?",
            a: ["Nala", "Kaizer", "Rajah", "Simba"],
            r: 2,
        },
        {
            q: "2.Which actor supplied the voice of Mushu in Mulan?",
            a: ["Eddie Murphy", "Jay-Z", "Tupac", "Will Smith"],
            r: 0,
        },
        {
            q: "3.Which princess attempts to disguise herself as a man?",
            a: ["Belle", "Ariel", "Merida", "Mulan"],
            r: 3,
        },
        {
            q: "4.Who was the first Disney princess based on a real historical figure?",
            a: ["Mulan", "Pocahontas", "Cinderalla", "Aurora"],
            r: 1,
        },
        {
            q: "5.I'll Make  Man Out of You was a song in which 1998 Disney animation?",
            a: ["Frozen", "Mulan", "Beauty & the Beast", "Aladdin"],
            r: 1,
        },
        {
            q: "6.Tangled is based on which of the Grimms' fairy tales?",
            a: ["Snow White", "Cinderella", "Rapunzel", "Sleeping Beauty"],
            r: 2,
        },
        {
            q: "7.In Toy Story, what is written on Andy's toys?",
            a: ["Boo", "Hello", "Andy", "Love"],
            r: 2,
        },
        {
            q: "8.Who did Lilo tell Stitch was the model citizen?",
            a: ["Trump", "Elvis", "Kanye", "Queen"],
            r: 1,
        },
        {
            q: "9.What did Jumba Jookiba name Stitch?",
            a: ["Experiment 696 ", "Experiment 007 ", "Experiment 101 ", "Experiment 626 "],
            r: 3,
        },
        {
            q: "10.Which movie is this quote from? \"OHANA means family, Family means no one gets left behind.\"",
            a: ["Lilo & Stitch", "Frozen", "Toy Story", "Finding Nemo"],
            r: 0,
        },
    ]


    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswers = 0;
    var count = 60;//timer is 60 sec
    var counter;
    var i;
    var userAnswers = {
        question_0_answers: 5,
        question_1_answers: 5,
        question_2_answers: 5,
        question_3_answers: 5,
        question_4_answers: 5,
        question_5_answers: 5,
        question_6_answers: 5,
        question_7_answers: 5,
        question_8_answers: 5,
        question_9_answers: 5,

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

    $(".btn").on('click', function (be) {//when i clock on the start button
        counter = setInterval(timer, 1000);//starts timern
        $(".btn").hide();//hides the start button when timer starts
        console.log(be);


        for (i = 0; i < data.length; i++) {//goes through array
            $("#questions").append(`<p>${data[i].q}</p>`)//adds the question from the array into html
            $("#questions").append(`<form id="question_${i}"></form>`)//adds form id....
            $(`#question_${i}`).append(`<input type="radio" name="question_${i}_answers" value=0>${data[i]["a"][0]}</input>`)//selects question_0 and adds the first choice
            $(`#question_${i}`).append(`<input type="radio" name="question_${i}_answers" value=1>${data[i]["a"][1]}</input>`)//2nd choice
            $(`#question_${i}`).append(`<input type="radio" name="question_${i}_answers" value=2>${data[i]["a"][2]}</input>`)//3rd choice
            $(`#question_${i}`).append(`<input type="radio" name="question_${i}_answers" value=3>${data[i]["a"][3]}</input>`)//4th choice
        
            
            //this is events registerion meaning 
            $(`#question_${i}`).change(function(e){
                console.log(e)

                //e.target.name === question_0_answers etc
                var selected_value = $(`input[name="${e.target.name}"]:checked`).val();//selects input with name value of question_0_answers and checked input,ie selected user answer
                
                //userAnswers["question_0_answers"] which is the same as userAnswers.question_0 
                userAnswers[e.target.name] = selected_value


                console.log(userAnswers);
            });


            // console.log(data[i].q)


        }
    });
    function timer() {//countdown to 0
        count = count - 1;
        if (count <0) {
            scoreGame();

            clearInterval(counter);
            return;
        }
        document.getElementById("display").innerHTML = count + " secs";//display timer to html
    }

    function scoreGame(){//tracks the score
        for(var i=0; i<data.length; i++){

            if(userAnswers[`question_${i}_answers`] == answerKey[`question_${i}_answers`])//if user answer correct they get a point
            {
                correctAnswers++;
            }
            else if(userAnswers[`question_${i}_answers`] == 5){//if they didnt answer they get a point for unaswered
                unAnswers++;
            }
            else{
                incorrectAnswers++;//if they guess wrong, they get a point for incorrect
            }
        }
        $("#questions").hide();//hides the text in the id tag question 
        document.getElementById("display").innerHTML = "Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" + "UnAnswered: " + unAnswers;//the score is recorded
    }
});

