import data from "./data";
import { useState } from "react";
import Soru from "./Question";


function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>

      <div className="container">
        <h4>questions and answers about login</h4>
        <section className="info">

          {questions.map((question) =>{
            return <Soru key={question.id} {...question}/>
          })}

        </section>

      </div>   
    </main>
  )
}

export default App;
