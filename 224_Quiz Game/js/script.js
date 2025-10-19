var currentCategory = ['history', 'language', 'nature', 'technology'];
var Questions = [

    // store answer with questions for easier retrieval
    {
        category: 'history',
        question: 'Mexico achieved independence before USA',
        answer: false
    },
    {
        category: 'history',
        question: 'Sir Winston Churchill was a Labour Prime Minister',
        answer: false
    },
    {
        category: 'history',
        question: 'The Ming Dynasty was the final Chinese Dynasty',
        answer: false
    },
    {
        category: 'history',
        question: 'Henry VIII wife Anne Boleyn was executed',
        answer: true
    },
    {
        category: 'history',
        question: 'The Magna Carta was signed in Rome',
        answer: false
    },
    {
        category: 'history',
        question: 'Cleopatra had a child with Julius Caesar',
        answer: true
    },
    {
        category: 'history',
        question: 'The Iron Age comes after the Bronze Age',
        answer: true
    },

    {
        category: 'language',
        question: 'There are 24 letters in the Greek alphabet',
        answer: true
    },
    {
        category: 'language',
        question: 'There is no German word meaning \'fluffy\'',
        answer: false
    },
    {
        category: 'language',
        question: 'In Welsh a microwave is known as a \'popty ping\'',
        answer: true
    },
    {
        category: 'language',
        question: '\'To\', \'Too\', and \'Two\' are heteronyms',
        answer: false
    },
    {
        category: 'language',
        question: 'Bengali is the most spoken language in India',
        answer: false
    },
    {
        category: 'language',
        question: 'There are more 5 letter words than 12 letter words',
        answer: false
    },
    {
        category: 'language',
        question: 'South Africa has 11 official languages',
        answer: true
    },

    {
        category: 'nature',
        question: 'An octopus has three hearts',
        answer: true
    },
    {
        category: 'nature',
        question: 'There are more stars in space than grains of sand on every beach in the world',
        answer: true
    },
    {
        category: 'nature',
        question: 'There are more fake flamingos in the world than real ones',
        answer: true
    },
    {
        category: 'nature',
        question: 'Cracking your knuckles too much will give you arthritis',
        answer: false
    },
    {
        category: 'nature',
        question: 'Black holes are not black',
        answer: false
    },
    {
        category: 'nature',
        question: 'It rains diamonds on Saturn and Jupiter',
        answer: true
    },
    {
        category: 'nature',
        question: ' DNA is an abbreviation for ‘Deoxyribonucleic acid’',
        answer: true
    },

    {
        category: 'technology',
        question: 'Nintendo was founded after the year 1900',
        answer: false
    },
    {
        category: 'technology',
        question: 'Gold is not a good conductor of electricity',
        answer: false
    },
    {
        category: 'technology',
        question: ' In computing, keyboards are used as input devices',
        answer: true
    },
    {
        category: 'technology',
        question: ' Atomic bombs work by atomic fission',
        answer: true
    },
    {
        category: 'technology',
        question: ' Solar power generates electricity from the Sun',
        answer: true
    },
    {
        category: 'technology',
        question: ' Apple iPhone first become available in 2006',
        answer: false
    },

];

// when declared over here other functions will see it; it's not best practice to register them in global/window scope, but better than nothing ;)
var count = 0;
var points = 0;
var category;
var question;

//show answer buttons only after clicking start button
function showButtons() {
    document.getElementById('answerT').style.display = "";
    document.getElementById('answerF').style.display = "";
}

// choose a category and a question
function catAndQuest() {
    start.style.display = 'none';
    showButtons();

    document.getElementById('points').innerHTML = 'Points: ' + (points);
    document.getElementById('count').innerHTML = 'Question ' + (++count) + ' \/ 27';

    currentCategory = Questions.map(function (question) {
        return question.category;
    });
    category = currentCategory[Math.floor(Math.random() * currentCategory.length)];
    document.getElementById('category').innerHTML = 'Category: ' + (category);

    var questionList = Questions.filter(function (question) {
        return question.category === category;
    });

    question = questionList[Math.floor(Math.random() * questionList.length)];
    document.getElementById('quest').innerHTML = question.question;
}

// create a copy of Questions array
var copy = [].concat(Questions);

// delete used question out of the copy array
function deleteUsed() {
    if (Questions.length > 0) {
        Questions.splice(Questions.indexOf(question), 1);
    } else {
        document.getElementById('answerT').style.display = "none";
        document.getElementById('answerF').style.display = "none";
        document.getElementById('questions').style.display = "none";
        document.getElementById('looser').style.display = "";
        document.getElementById('reset').style.display = "";
    }
}

//user answered question
function answer(value) {
    deleteUsed();
    if (value === question.answer) {
        points++;
        if (points == 15) {
            document.getElementById('answerT').style.display = "none";
            document.getElementById('answerF').style.display = "none";
            document.getElementById('questions').style.display = "none";
            document.getElementById('winner').style.display = "";
            document.getElementById('reset').style.display = "";
        }
    }
    catAndQuest();
}

//restart the game
function restart() {
    document.location.href = "";
}