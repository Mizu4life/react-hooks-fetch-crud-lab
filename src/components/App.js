import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then((data) => setQuestionList(data))
  }, []);

  function handleAddGuestion(newQuestion){
    setQuestionList([...questionList, newQuestion])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddGuestion} onChangePage={setPage}/> : <QuestionList setQuestionList={setQuestionList} questionList={questionList}/>}
    </main>
  );
}

export default App;
