"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "sonner";


export default function ReactReduxProvider({children}:{children:React.ReactNode}){
  return (
    <Provider store={store}>{children}<Toaster/></Provider>
  );
}