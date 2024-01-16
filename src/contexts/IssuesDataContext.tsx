import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { api } from "../api/axios";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

interface IIssuesDataContext {
  issuesData: IPost[];
  getPosts: (query?: string) => Promise<void>;
}

interface IssuesDataContextProviderProps {
  children: ReactNode;
}

export const IssuesDataContext = createContext({} as IIssuesDataContext);

export function IssuesDataContextProvider({
  children,
}: IssuesDataContextProviderProps) {
  const [issuesData, setIssuesData] = useState<IPost[]>([]);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:RelancioBorgesDev/IssuesExample_GithubBlog`
        );

        setIssuesData(response.data.items);
      } finally {
      }
    },
    [issuesData]
  );

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <IssuesDataContext.Provider value={{ issuesData, getPosts }}>
      {children}
    </IssuesDataContext.Provider>
  );
}
