// import { Component } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import {
  decrement,
  increase,
  increment,
  toggleCounter,
} from "../store/counterSlice";

const Counter = () => {
  // const counter = useSelector((state) => state.counter.counter);
  // const show = useSelector((state) => state.counter.showCounter);
  const { counter, showCounter: show } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(increase(5));
    // console.log(increase(5));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    // console.log(toggleCounter());
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Ccounter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Ccounter);
