import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../api/axios";

export interface ProfileData {
  avatar_url: string | undefined;
  name: string | undefined;
  bio: string | undefined;
  followers: number | undefined;
  login: string | undefined;
  company: string | undefined;
}

interface ProfileDataContext {
  profileData: ProfileData | undefined;
}

interface ProfileDataContextProviderProps {
  children: ReactNode;
}

export const ProfileDataContext = createContext({} as ProfileDataContext);

export function ProfileDataContextProvider({
  children,
}: ProfileDataContextProviderProps) {
  const [profileData, setProfileData] = useState<ProfileData>();

  async function getProfileData(user: string) {
    const data = await api.get(`/users/${user}`);
    setProfileData(data.data);
  }

  useEffect(() => {
    getProfileData("RelancioBorgesDev");
  }, []);

  return (
    <ProfileDataContext.Provider value={{ profileData }}>
      {children}
    </ProfileDataContext.Provider>
  );
}
