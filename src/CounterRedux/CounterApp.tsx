import { Helmet } from "react-helmet";
import { Theme } from "./Theme";
import { combineReducers, createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//STYLE//
const H1 = styled.h1`
  text-align: ${Theme.textAlign};
  font-family: ${Theme.primaryFont};
  padding-top: 1.5em;
  color: ${Theme.primaryColor};
  font-size: 3em;
`;

const H2 = styled.h2`
  text-align: ${Theme.textAlign};
  font-family: ${Theme.secondaryFont};
  padding-top: 2em;
  padding-bottom: 2em;
  color: ${Theme.primaryColor};
  width: 100%;
  font-weight: inherit;
`;
const DivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 880px;
  margin: auto;
`;
const Button = styled.button`
  font-family: ${Theme.secondaryFont};
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 1em;
  text-transform: ${Theme.textTransform};
  background: ${Theme.primaryColor};
  color: ${Theme.secondaryColor};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: ${Theme.secondaryColor};
    color: ${Theme.primaryColor};
  }
`;

//CODE//

const INCREMENT1 = "INCREMENT1" as const;
const DECREMENT1 = "DECREMENT1" as const;
const INCREMENT2 = "INCREMENT2" as const;
const DECREMENT2 = "DECREMENT2" as const;
const POW2 = "POW2" as const;
const POWSTATE = "POWSTATE" as const;
const DIVIDED2 = "DIVIDED2" as const;
const SQRTSTATE = "SQRTSTATE" as const;

const countReducer = (state = 0, action: { type: any }) => {
  switch (action.type) {
    case INCREMENT1:
      return state + 1;
    case DECREMENT1:
      return state - 1;
    case INCREMENT2:
      return state + 2;
    case DECREMENT2:
      return state - 2;
    case POW2:
      return state ** 2;
    case POWSTATE:
      return state ** state;
    case DIVIDED2:
      return state / 2;
    case SQRTSTATE:
      return Math.sqrt(state);
    default:
      return state;
  }
};
const allReducers = combineReducers({
  counter: countReducer,
});

export const store = createStore(allReducers);

type RootState = ReturnType<typeof allReducers>;

const buttonsAction = () => ({
  onIncrement1: () => ({ type: INCREMENT1 }),
  onIncrement2: () => ({ type: INCREMENT2 }),
  onDecrement1: () => ({ type: DECREMENT1 }),
  onDecrement2: () => ({ type: DECREMENT2 }),
  onPow2: () => ({ type: POW2 }),
  onPowState: () => ({ type: POWSTATE }),
  onDivided: () => ({ type: DIVIDED2 }),
  onSquareRoot: () => ({ type: SQRTSTATE }),
});

const counterSelector = (state: RootState) => state.counter;

export const CounterInRedux = () => {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <DivWrapper>
      <Helmet>
        <style>{`body { background-color: ${Theme.tertiaryColor}}}`}</style>
      </Helmet>
      <H1>Counter in Redux </H1>
      <H2>Your current number is: {count} </H2>
      <Button onClick={() => dispatch(buttonsAction().onIncrement1())}>
        increment 1
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onDecrement1())}>
        decrement 1
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onIncrement2())}>
        increment 2
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onDecrement2())}>
        decrement 2
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onPow2())}>
        exponent 2
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onPowState())}>
        exponent current number
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onDivided())}>
        divided 2
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onSquareRoot())}>
        square root of current number
      </Button>
    </DivWrapper>
  );
};
