import { useContext } from "react";
import { ProfileDataContext } from "../contexts/ProfileDataContext";

export const useProfileData = () => {
  return useContext(ProfileDataContext);
};
