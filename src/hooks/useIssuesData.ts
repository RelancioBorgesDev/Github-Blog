import { useContext } from "react";
import { IssuesDataContext } from "../contexts/IssuesDataContext";

export const useIssuesData = () => {
  return useContext(IssuesDataContext);
};
