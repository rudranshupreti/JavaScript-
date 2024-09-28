const questionAnswer = [
    {
      id: 1,
      question: "Coastal State of India?",
      optionA: "Maharashtra",
      optionB: "Haryana",
      optionC: "UP",
      optionD: "Kerala",
      answer: ["a", "b"],
    },
    {
      id: 2,
      question: "Asian Country?",
      optionA: "India",
      optionB: "China",
      optionC: "USA",
      optionD: "Russia",
      answer: ["a", "b"],
    },
    {
      id: 3,
      question: "Capital city of J&K?",
      optionA: "Leh",
      optionB: "Jammu",
      optionC: "Kargil",
      optionD: "Shree Nagar",
      answer: ["b", "d"],
    },
    {
      id: 4,
      question: "City in Europe?",
      optionA: "London",
      optionB: "Biging",
      optionC: "Delhi",
      optionD: "Ankara",
      answer: ["a"],
    },
  ];
  
  const userAnswer = [
    {
      questionId: 1,
      answer: ["c", "b"],
    },
    {
      questionId: 3,
      answer: ["b", "c"],
    },
    {
      questionId: 4,
      answer: ["a"],
    },
  ];
  
  const result = {
    skip: 1,
    wrong: 2,
    right: 1,
    totalAttempt: 3,
  };
  
questionAnswer.forEach((question) => {
    const userAns = userAnswer.find((ua) => ua.questionId === question.id);
    if(!userAns){
        result.skip++;
    }
    else{
        const iscorrect = userAns.answer.length === question.answer.length &&
        userAns.answer.every((val) => question.answer.includes(val));
    if (iscorrect){
        result.right++;
    }else{
        result.wrong++
    }
}

return result;

    
});


