$(document).ready(function() {
    var correct=0;
    var wrong=0;
    var unanswered=0;
    var count=30;
    var objIndex=0;
    var timeoutId;

    var trivia = [{
    question: "What is Earth's largest Continent?",
    option: ["ASIA", "AFRICA", "EUROPE", "ANTARCTICA"],
    answer: "ASIA",
    fact: "ASIA - Earth’s largest continent at approximately 17,300,000 square miles.",
    image: "assets/images/image-1.png",
    },
    {
    question: "What country has the most natural lakes?",
    option: ["UNITED STATES", "AUSTRALIA", "INDIA", "CANADA"],
    answer: "CANADA",
    fact: "CANADA - It has more than half of all the natural lakes in the world.",
    image: "assets/images/image-2.jpg",
    },
    {
    question: "What is the driest place on Earth?",
    option: ["ATACAMA DESERT", "MCMURDO, ANTARCTICA", "SAHARA DESERT", "KUFRA, LIBYA"],
    answer: "MCMURDO, ANTARCTICA",
    fact: "THE MCMURDO DRY VALLEYS, ANTARCTICA - It hasn't rained there for more than 2 million years!",
    image: "assets/images/image-3.jpg",
    },
    {
    question: "Which African nation has the most Pyramids?",
    option: ["EGYPT", "ALGERIA", "SUDAN", "LIBYA"],
    answer: "SUDAN",
    fact: "SUDAN - Home to over 200 pyramids.",
    image: "assets/images/image-4.jpg",
    },
    {
    question: "What is the oldest city in the world?",
    option: ["JERUSALEM", "DAMASCUS", "JERICHO", "ATHENS"],
    answer: "DAMASCUS",
    fact:  "DAMASCUS - The capital of Syria, dating back to at least 11,000 years.",
    image: "assets/images/image-5.jpg",
    },
    {
    question: "What is the smallest independent country on Earth?" ,
    option: ["NAURA", "GRENADA", "MONACO", "VATICAN CITY"],
    fact: "VATICAN CITY - The world's smallest country with an area of just 0.44 kilometers.",
    image: "assets/images/image-6.jpg",
    },
    {
    question: "What is the major city located on two continents?",
    option: ["NEW DELHI", "LONDON", "ROME", "ISTANBUL"],
    fact: "ISTANBUL - The only major city located on two continents -- Europe and Asia.",
    image: "assets/images/image-7.jpg",
    },
    {
    question: "What is the largest country in South America?",
    option: ["ARGENTINA", "BRAZIL", "PERU", "COLUMBIA"],
    fact: "BRAZIL - Covers nearly half of South America and is larger than the United States of America.",
    image: "assets/images/image-8.jpg",
    },
    {
    question: "What is the tallest mountain in the world?",
    option: ["QOGIR", "MOUNT EVEREST", "MOUNT KILAMANJARO", "ACONCAGUA"],
    fact: "MOUNT EVEREST - At 8,850 meters (29,035 ft) is the tallest mountain in the world.",
    image: "assets/images/image-9.jpg",
    },
    {
    question: "Which US state has the most active volcanoes?",
    option: ["CALIFORNIA", "ALASKA", "WASHINGTON", "HAWAII"],
    fact: "ALASKA - 130 of the 169 volcanoes in the United States  are located here.",
    image: "assets/images/image-10.jpg",
    },]
    
    
    //clearTimeout(timeoutId);

    function displayQuestion() {
        $(".sub-wrapper").html("<div id='timer'></div>");
        $(".sub-wrapper").append("<div id='questions'>" + trivia[objIndex].question + "</div>");
        $(".sub-wrapper").append("<div id='options'>" +trivia[objIndex].option[0]+ "</div>");
        $(".sub-wrapper").append("<div id='options'>" +trivia[objIndex].option[1]+ "</div>");
        $(".sub-wrapper").append("<div id='options'>" +trivia[objIndex].option[2]+ "</div>");
        $(".sub-wrapper").append("<div id='options'>" +trivia[objIndex].option[3]+ "</div>");
        timeoutId = setTimeout(displayAnswer, 30000);   
    }
    //displays answer
    function displayAnswer() {
        $(".sub-wrapper").html("<div id='facts'>" +trivia[objIndex].fact+ "</div>");
        $(".sub-wrapper").append("<img id='images' src="+trivia[objIndex].image+">");
        setTimeout(nextQuestion, 6000); 
    }
    //goes to next question
    function nextQuestion() {  
        clearInterval(timeoutId);
        objIndex++;
        displayQuestion();                 
    }
      
    $("#start-button").on("click", function() {
        displayQuestion();
        var intervalId = setInterval(time, 1000);
        console.log(count);
    });

    $(document).on("click", "#options", function() {
        displayAnswer();
    });

    function time() {
        //$document("#timer").text(+count+" s");
        count--;
        console.log(count);
    }

    /*function result() {
        if(trivia.answer===?) {
            correct++;
        }
        else if(trivia.answer!==?) {
            wrong++;
        }   
        else {
            unanswered++;
        }*/    
    
});