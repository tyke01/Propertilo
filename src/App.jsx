import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import {
  Accounting,
  Bulk,
  Dashboard,
  Login,
  Logout,
  Payments,
  Plan,
  Properties,
  Reports,
  Rooms,
  Settings,
  Team,
  Tenants,
  Register,
  Tutorial,
} from "./pages";

import { UseStateContext } from "./contexts/ContextProvider";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  const { activeMenu, currentColor } = UseStateContext();
  return (
    <main className="bg-main-bg relative">
      <SignedIn>
        {/* <UserButton /> */}
        <BrowserRouter>
          <div className="flex realative">
            {activeMenu ? (
              <div
                className="fixed bg-sidebar-bg left-0"
                style={{ zIndex: "9999", height: "100vh", overflowY: "auto" }}
              >
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 ">
                <Sidebar />
              </div>
            )}
            {/*  */}
            <div
              className={`min-h-screen w-full   ${
                activeMenu ? " md:ml-72" : "flex-2"
              }`}
            >
              <div
                className="fixed top-0 md:static bg-white w-full"
                style={{ position: "fixed", zIndex: "999" }}
              >
                <Navbar />
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/properties" element={<Properties />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/tenants" element={<Tenants />} />
                  <Route path="/payments" element={<Payments />} />
                  <Route path="/bulk" element={<Bulk />} />
                  <Route path="/accounting" element={<Accounting />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/plan" element={<Plan />} />
                  <Route path="/settings" element={<Settings />} />

                  <Route path="/logout" element={<Logout />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/tutorial" element={<Tutorial />} />
                </Routes>
              </div>
            </div>
            {/*  */}
          </div>
        </BrowserRouter>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl={"/Dashboard"}/>
      </SignedOut>
    </main>
  );
}

export default App;
