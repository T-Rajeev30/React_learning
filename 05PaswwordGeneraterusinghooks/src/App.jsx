import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}[]";
    }
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  } ,[password])

  useEffect(()=>{
    passwordGenerator()} , [length , numAllowed , charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-slate-300">
        <h1 className="text-black text-3xl text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mt-5 mb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick = {copyPasswordToClipboard}className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1 text-l">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 text-l">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
