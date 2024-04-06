import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({setQuestionList, questionList}) {
 
  
  function handleDelete(deletedQuestion){
    const updatedList = questionList.filter((question) => question.id !== deletedQuestion.id);
    setQuestionList(updatedList);
  }
  function handlerUpdateQuestion(updatedQuestion){
    const updatedList = questionList.map((question) => {
      if(question.id === updatedQuestion.id){
        return question = updatedQuestion
      }else return question})
    setQuestionList(updatedList);

  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          questionList?.map(question => <QuestionItem key={question.id} question={question} onDelete={handleDelete} onUpdateQuestion={handlerUpdateQuestion}/>)
        }
        </ul>
    </section>
  );
}

export default QuestionList;
