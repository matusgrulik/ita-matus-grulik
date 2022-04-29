import React from "react";

/**
 * inspiration from: https://dev.to/svehla/react-typed-state-management-under-10-lines-of-code-1347
 */

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
