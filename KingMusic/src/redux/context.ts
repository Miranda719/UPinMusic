import { createContext, Dispatch } from "react";
export type ActionType = {
  type: string;
  keywords: string;
};
type ContextType= [string, Dispatch<ActionType>];
const context = createContext<ContextType>(["", () => {}]);

export function city(state = "", action: ActionType) {
  switch (action.type) {
    case "CHANGE":
      return action.keywords;
      break;
    default:
      return state;
  }
}

export default context;
