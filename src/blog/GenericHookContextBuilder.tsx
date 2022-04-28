import React, { useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const genericHookContextBuilder = <T, P>(hook: () => T) => {
  const Context = React.createContext<T>(undefined as never);

  return {
    Context,
    ContextProvider: (props: Props & P) => {
      const value = hook();

      return (
        <Context.Provider value={value}>{props.children}</Context.Provider>
      );
    },
  };
};

const useLogicState = () => {
  const [logicState, setLogicState] = useState(null as null | string);

  return {
    logicState,
    setLogicState,
  };
};

export const {
  ContextProvider: LogicStateContextProvider,
  Context: LogicStateContext,
} = genericHookContextBuilder(useLogicState);

const Child = () => {
  const logic = useContext(LogicStateContext);
  return <div />;
};

const App = () => (
  <LogicStateContextProvider>
    <Child />
  </LogicStateContextProvider>
);
