import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { connect } from 'react-redux'

interface CountProps {
  count: number;
  increment: () => void;
  incrementAmount: (amount: number) => void;
  decreaseAmount: (amount: number) => void;
  decrease: () => void;
}


function App({ count, increment,incrementAmount,decrease,decreaseAmount }: CountProps) {
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increment()}>increment + 1</button>
        <button onClick={() => incrementAmount(5)}>increment + 5</button>

        <div>
          <strong>{count}</strong>
        </div>

        <button onClick={() => decrease()}>decrease - 1</button>
        <button onClick={() => decreaseAmount(5)}>decrease - 5</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}



const mapStateToProps = (state: { counter: { value: number } }) => {
  return {
    count:state.counter.value
  }
}

const mapDispatchToProps = (
  dispatch: (action: { type: string; payload?: number }) => void
) => {
  //mesmo valor usado antes utilizado no switch
  return {
    increment: () => dispatch({ type: "counter/increment" }),
    incrementAmount: (amount: number) =>
      dispatch({ type: "counter/incrementAmout", payload: amount }),
    decrease: () => dispatch({ type: "counter/decrease" }),
    decreaseAmount: (amount: number) =>
      dispatch({ type: "counter/decreaseAmount", payload: amount }),
  };
};

//HOC
export default connect(mapStateToProps, mapDispatchToProps)(App);
