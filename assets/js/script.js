function start_btn {
    var start_button = document.getElementById("start_btn");
    start_button.disable = true;
}

function quit_btn {
    var quit = document.getElementById("quit_btn");
    quit.disable = true;
}

let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Horison Tango Mariposa Laguna",
      "Hyper Text Markup Language",
      "Hyper Text Master cLass",
      "Hyper Translated Meta Language"
    ]
  },

    {
    numb: 2,
    question: "What is CSS?",
    answer: "Cascading Style Sheet",
    options: [
      "Cascading Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Computing Saves Style"
    ]
  },

    {
    numb: 3,
    question: "How old is Javascript?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },

    {
    numb: 4,
    question: "How old is HTML 2",
    answer: "1994",
    options: [
      "1991",
      "1992",
      "1993",
      "1994"
    ]
  },

    {
    numb: 5,
    question: "What was Javascript known as before?",
    answer: "ECMAScript",
    options: [
      "Script.Coffee",
      "Java",
      "Node.js",
      "ECMAScript"
    ]
  },

    {
    numb: 6,
    question: "Which of these is not a coding language?",
    answer: "Tine",
    options: [
        "C#",
        "Python",
        "TiNe",
        "Go"
    ]
    },
  {
    numb: 7,
    question: "How many lines of code for the moon landing?",
    answer: "145,000",
    options: [
        "91,000",
        "145,000",
        "432,951",
        "Over 9,000!"
    ]
    },
];