import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './useStorageState';
import userCredentials from './userCredentials.json';

const AuthContext = createContext<{
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => false,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  
  const signIn = (email: string, password:string) => {
    // Perform sign-in logic here
    const user = userCredentials.find((user) => user.email === email && user.password === password);
    if (user) {
      setSession(user.email);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
