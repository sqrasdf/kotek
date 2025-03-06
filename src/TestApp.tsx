import { useEffect, useState, useContext, createContext } from "react";
import "./index.css";
import "./App.css";

const CountContext = createContext({ hehe: 8128 });

function TestApp() {
  const [count] = useState("count");

  return (
    <CountContext.Provider value={count}>
      <Child />
    </CountContext.Provider>
  );
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const { count } = useContext(CountContext);
  const { hehe } = useContext(CountContext);

  return (
    <>
      <div>count: {count}</div>
      <div>hehe: {hehe}</div>
    </>
  );
}

export default TestApp;
