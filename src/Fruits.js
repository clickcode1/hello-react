// @flow
import React,{useState, useReducer} from 'react';

export function Fruits({fruits}) {
  
  const g = ["one","two","three","four"];
  const [status, setStatus] = useState("Open")
  // const [checked, setChecked] = useState(true);
  const [checked, toggle] = useReducer(
    checked => !checked,
    false);
  
  console.log(g)
  return (
    <div>
      <h1>hello {status}</h1>
      <h1>Environment: {process.env.NODE_ENV}</h1>
      <h1>URLs: {process.env.REACT_APP_API_URL}</h1>
      <h1>Default: {process.env.REACT_APP_API_DEFAULT}</h1>
      <ul>
        {fruits.map((f,i) => 
          <li key={i}>{i + 1} {f.name}</li>
        )}
      </ul>

      {/* <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}></input> */}
      <input type="checkbox" value={checked} onChange={toggle}></input>
      {checked ? "checked":"not checked"}
    </div>
  );
};



