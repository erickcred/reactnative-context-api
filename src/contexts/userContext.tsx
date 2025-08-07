import { createContext, useState } from "react";

// types - propriedades
interface IUserContextProps {
  userName: string;
  name: string;
  save: (name: string) => void;
}

// Context
export const UserContext = createContext<IUserContextProps | undefined>(undefined);

// Provider
export default function UserContextProvider({ children }: any) {
  const [name, setName] = useState("");
  const contextValue: IUserContextProps = {
    userName: "name",
    name: name,
    save: saveLoginUserToCache,
  };

  function saveLoginUserToCache(value: string) {
    if (value !== "")
      setName(value);
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}