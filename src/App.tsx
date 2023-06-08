import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from "react-redux";
import {
  decrease,
  decreaseAmount,
  increment,
  incrementAmount,
} from "./features/counter/counter-slice";
import { useSelectorApp } from "./hooks";

export default function App() {
  const count = useSelectorApp((state) => state.counter.value);
  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(increment())}>increment + 1</button>
        <button onClick={() => dispatch(incrementAmount(5))}>
          increment + 5
        </button>

        <div>
          <strong>{count}</strong>
        </div>

        <button onClick={() => dispatch(decrease())}>decrease - 1</button>
        <button onClick={() => dispatch(decreaseAmount(5))}>
          decrease - 5
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}



// const mapStateToProps = (state: { counter: { value: number } }) => {
//   return {
//     count:state.counter.value
//   }
// }

// const mapDispatchToProps = (
//   dispatch: (action: { type: string; payload?: number }) => void
// ) => {
//   //mesmo valor usado antes utilizado no switch
//   return {
//     increment: () => dispatch({ type: "counter/increment" }),
//     incrementAmount: (amount: number) =>
//       dispatch({ type: "counter/incrementAmout", payload: amount }),
//     decrease: () => dispatch({ type: "counter/decrease" }),
//     decreaseAmount: (amount: number) =>
//       dispatch({ type: "counter/decreaseAmount", payload: amount }),
//   };
// };

// //HOC
// export default connect(mapStateToProps, mapDispatchToProps)(App);
