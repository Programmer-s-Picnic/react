import { useState } from "react";

function WeatherFetch() {
  let [questionno, setQuestionno] = useState(0);
  let [question, setQuestion] = useState("");
  let [a, setA] = useState("");

  function showWeather(data) {
    console.log(data);

    let question = data[questionno];
    console.log(question.question);
    setQuestion(question.question);
    setA(question.a);
    setQuestionno(questionno+1);
  }
  function fetchWeather() {
    const url = `https://thakuramitsingh9365-ctrl.github.io/Kbctest/package.json`;
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => showWeather(data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>KBC Example</h1>
      <input id="t" type="text"></input>

      <h1>{questionno+1}) {question}</h1>
      <br></br>
      <label>{a}<input type="radio"></input></label>
      <button onClick={fetchWeather}>Fetch Varanasi Weather</button>
    </div>
  );

  fetchWeather();
}

export default WeatherFetch;
