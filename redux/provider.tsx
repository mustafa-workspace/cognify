"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { useGetMeQuery } from "./apis/AuthApi";
import { Toaster } from "sonner";

function AuthInitializer({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading, error } = useGetMeQuery();
  // console.log("Current user:", user);
  // console.log("Auth loading:", isLoading);
  // console.log("Auth error:", error);

  return <>{children}</>;
}

export default function ReactReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthInitializer>
        {children}
        <Toaster />
      </AuthInitializer>
    </Provider>
  );
}