import React, {useState} from 'react';
import axios from 'axios';

function ReactApp() {
  const [fetching, setFetching] = useState(false);
  const [response, setResponse] = useState("");

  // call endpoint to determine between foo or bar
  const checkFoobar = (foo, bar) => () => {
    setFetching(true);
    axios.get("http://localhost:4000/api/fizzbuzz", {params: {foo, bar}})
      .then(response => {
        setResponse(response.data.message);
        setFetching(false)
      })
      .catch(e => {
        console.log(e);
        setFetching(false)
      });
  };

  return (
    <div className="App">
      <h1>Papa - Fullstack Engineer Takehome Assignment</h1>
      <p>Welcome to the takehome assignment for fullstack engineers at Papa. We hope you have fun doing this
        assignment!</p>
      <p><strong>Time Limit: 1 hour</strong></p>
      <p><strong>Skills tested: React knowledge, and backend knowledge (any language)</strong></p>

      <hr/>

      <p>Here's what we <strong>do care</strong> about in this assignment:</p>
      <ul>
        <li>Proper functionality - are you actually solving what the problem is?</li>
        <li>Code cleanliness</li>
        <li>Conventions</li>
        <li>Logic</li>
        <li>Source control using Git</li>
      </ul>

      <p>Here's what we <strong>don't care</strong> about in this assignment:</p>
      <ul>
        <li>Design</li>
        <li>Tests</li>
      </ul>

      <hr/>

      <p><strong>Your task:</strong></p>

      <p>Add a new backend endpoint with the following signature GET /api/fizzbuzz, it will
        take two query parameters foo and bar. If foo is passed and true call
        fooFunction(), else if bar is passed and true call barFunction(). If both are passed and true call
        fooBarFunction()
        and render the output in the box below</p>

      <p>Add 3 buttons here in the UI. One for foo, one for bar, and one for foobar to the react client. Then hit
        the appropriate endpoint on click with the correct parameters.
      </p>

      <p><strong>UI Buttons:</strong></p>

      <p>Add them here</p>
      <button onClick={checkFoobar(true, false)}>foo</button>
      <br/>
      <button onClick={checkFoobar(false, true)}>bar</button>
      <br/>
      <button onClick={checkFoobar(true, true)}>foobar</button>

      <p><strong>API request result:</strong></p>

      <p>Render result here: <span style={{fontWeight: "bold"}}>{fetching ? "fetching.." : response}</span></p>
    </div>
  );
}

export default ReactApp;
