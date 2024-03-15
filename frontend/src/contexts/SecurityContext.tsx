import { FC, ReactNode, createContext, useState } from "react";
import signup from "../services/signup";

type ContextType = {
  user: string;
  setUser: (name: string) => void;

  pwd: string;
  setPwd: (name: string) => void;

  matchPwd: string;
  setMatchPwd: (name: string) => void;

  errMsg: string;
  setErrMsg: (error: string) => void;

  success: boolean;
  setSuccess: (boolean: boolean) => void;

  handleAddUser: (
    e: React.FormEvent<HTMLFormElement>,
    type: "signup" | "login"
  ) => void;
};

type ProviderType = FC<{ children: ReactNode }>;

export const SecurityContext = createContext<ContextType>({
  user: "",
  setUser: () => {},

  pwd: "",
  setPwd: () => {},

  matchPwd: "",
  setMatchPwd: () => {},

  errMsg: "",
  setErrMsg: () => {},

  success: false,
  setSuccess: () => {},

  handleAddUser: () => {},
});

export const SecurityProvider: ProviderType = ({ children }) => {
  const [user, setUser] = useState("");

  const [pwd, setPwd] = useState("");

  const [matchPwd, setMatchPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false);

  const handleAddUser = async (
    e: React.FormEvent<HTMLFormElement>,
    type: "signup" | "login"
  ) => {
    e.preventDefault();

    try {
      const response = await signup(
        {
          username: user,
          password: pwd,
        },
        type
      );
      setSuccess(true);
      return response;
    } catch (err) {
      setErrMsg(
        type === "signup" ? "User already exists" : "User does not exist"
      );
      return null;
    }
  };

  return (
    <SecurityContext.Provider
      value={{
        user,
        setUser,
        pwd,
        setPwd,
        matchPwd,
        setMatchPwd,
        errMsg,
        setErrMsg,
        success,
        setSuccess,
        handleAddUser,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};
