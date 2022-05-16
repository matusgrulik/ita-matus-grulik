/**
 * source: https://github.com/Svehla/typed-react-redux
 */
export type GetStateFromReducers<T> = T extends (...args: any[]) => infer Ret
  ? Ret
  : T extends Record<any, any>
  ? {
      [K in keyof T]: GetStateFromReducers<T[K]>;
    }
  : T;

export type GetAllReduxActions<T> = T extends (
  state: any,
  actions: infer Actions,
  ...args: any[]
) => any
  ? // omit empty objects like `{}`
    keyof Actions extends []
    ? never
    : Actions
  : T extends Record<string, infer Values>
  ? GetAllReduxActions<Values>
  : never;
