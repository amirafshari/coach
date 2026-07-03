import { createContext, useContext } from "react";

/* In-app navigation between the home view and the term / exercise detail
   pages. Provided by App; consumed by any component that links to a page. */

export const NavContext = createContext({
  openTerm() {},
  openExercise() {},
  goHome() {},
});

export function useNav() {
  return useContext(NavContext);
}
