import React from "react";
import {Routes,Route} from "react-router-dom";
import './globals.css';
import SigninFrom from "./_auth/from/SigninFrom.tsx";
import {Home} from "./_root/pages";
import SignupFrom from "./_auth/from/SignupFrom.tsx";
import AuthLayout from "./_auth/AuthLayout.tsx";
import RootLayout from "./_root/RootLayout.tsx";
import { Toaster } from "@/components/ui/toaster"
const App: React.FC =  () => {
  return (
      <main className="flex h-screen">
        <Routes>
        {/*  public Routes  */}
            <Route element={<AuthLayout/>}>
                <Route path="/sign-in" element={<SigninFrom/>}/>
                <Route path="/sign-up" element={<SignupFrom/>}/>
            </Route>



        {/*  private Routes  */}
            <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>

            </Route>
        </Routes>
        <Toaster/>
      </main>
  );
};
export default App;