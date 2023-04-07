import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg ">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 text-white rounded-full"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-80 h-screen fixed sidebar bg-white dark:bg-secondary-dark-bg">
              sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg"></div>
          )}
          <div
            className={`
          dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<div>Home</div>} />
              <Route path="/ecommerce" element={<div>Not Found</div>} />

              {/* Pages */}
              <Route path="/orders"></Route>
              <Route path="/employees"></Route>
              <Route path="/customers"></Route>

              {/* Apps */}
              <Route path="/kanban"></Route>
              <Route path="/editor"></Route>
              <Route path="/calendar"></Route>
              <Route path="/color-picker"></Route>

              {/* Charts */}
              <Route path="/line"></Route>
              <Route path="/area"></Route>
              <Route path="/bar"></Route>
              <Route path="/pie"></Route>
              <Route path="/financial"></Route>
              <Route path="/color-mapping"></Route>
              <Route path="/pyramid"></Route>
              <Route path="/stacked"></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
