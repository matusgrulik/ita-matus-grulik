import { GetAllReduxActions, GetStateFromReducers } from "./utils";
import { Helmet } from "react-helmet";
import { combineReducers, createStore } from "redux";
import { theme } from "./Theme";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: ${theme.textAlign};
  font-family: ${theme.primaryFont};
  padding-top: 1.5em;
  color: ${theme.primaryColor};
  font-size: 2em;
`;

const H2 = styled.h2`
  text-align: ${theme.textAlign};
  font-family: ${theme.secondaryFont};
  padding-top: 2em;
  padding-bottom: 2em;
  color: ${theme.primaryColor};
  width: 100%;
  font-size: 1.5em;
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
  font-family: ${theme.secondaryFont};
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 1em;
  text-transform: ${theme.textTransform};
  background: ${theme.primaryColor};
  color: ${theme.secondaryColor};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: ${theme.secondaryColor};
    color: ${theme.primaryColor};
  }
`;

/**
 * inspiration: https://dev.to/svehla/typescript-100-type-safe-react-redux-under-20-lines-4h8n
 */

const INCREMENT = "INCREMENT1" as const;
const DECREMENT = "DECREMENT1" as const;
const POW2 = "POW2" as const;
const POWSTATE = "POWSTATE" as const;
const DIVIDED2 = "DIVIDED2" as const;
const SQRTSTATE = "SQRTSTATE" as const;

const increment = (incrementBy: number) => ({
  type: INCREMENT,
  incrementBy,
});
const decrement = (decrementBy: number) => ({
  type: DECREMENT,
  decrementBy,
});
const pow2 = (powBy: number) => ({
  type: POW2,
  powBy,
});
const powState = (powStateBy: number) => ({
  type: POWSTATE,
  powStateBy,
});
const devided = (devidedBy: number) => ({
  type: DIVIDED2,
  devidedBy,
});
const sqrtState = (sqrtStateBy: number) => ({
  type: SQRTSTATE,
  sqrtStateBy,
});

type ActionType =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof pow2>
  | ReturnType<typeof powState>
  | ReturnType<typeof devided>
  | ReturnType<typeof sqrtState>;

const defaultState = {
  value: 0,
};

const countReducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.incrementBy };
    case DECREMENT:
      return { ...state, value: state.value - action.decrementBy };
    case POW2:
      return { ...state, value: state.value ** action.powBy };
    case POWSTATE:
      return { ...state, value: state.value ** state.value };
    case DIVIDED2:
      return { ...state, value: state.value / action.devidedBy };
    case SQRTSTATE:
      return { ...state, value: Math.sqrt(state.value) };
    default:
      return state;
  }
};
const allReducers = combineReducers({
  counter: countReducer,
});

export const store = createStore(allReducers);

export type GlobalState = GetStateFromReducers<typeof allReducers>;

export type AllReduxActions = GetAllReduxActions<typeof allReducers>;

const counterSelector = (state: GlobalState) => state.counter.value;

export const CounterInRedux = () => {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <DivWrapper>
      <Helmet>
        <title>Counter in Redux</title>
      </Helmet>
      <H1>Counter in Redux </H1>
      <H2>Your current number is: {count} </H2>
      <Button
        onClick={() => {
          dispatch(increment(1));
        }}
      >
        increment 1
      </Button>
      <Button
        onClick={() => {
          dispatch(increment(2));
        }}
      >
        increment 2
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement(1));
        }}
      >
        decrement 1
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement(2));
        }}
      >
        decrement 2
      </Button>
      <Button
        onClick={() => {
          dispatch(pow2(2));
        }}
      >
        exponent 2
      </Button>
      <Button
        onClick={() => {
          dispatch(powState(count));
        }}
      >
        exponent current number
      </Button>
      <Button
        onClick={() => {
          dispatch(devided(2));
        }}
      >
        divided 2
      </Button>
      <Button
        onClick={() => {
          dispatch(sqrtState(count));
        }}
      >
        square root of current number
      </Button>
    </DivWrapper>
  );
};
