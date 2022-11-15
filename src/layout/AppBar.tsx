import React from "react";
import { Logo } from "../components/Logo"
import { SearchBar } from "../components/SearchBar";
import { AppBarItems } from "../components/AppBarItems";

const appbarHeight = "64px";

export function AppBar() {
  return (
    <>
      <div className="app-bar">
        <div className="app-bar-content">
          <div className="row logo">
            <a href="/">
              <Logo height="32px" />

            </a>
          </div>
          <div className="row search-bar">
            <SearchBar />

          </div>
          {/* <div className="row-name"> 
<input className="login" type="text"  placeholder="Seu e-mail"/>
<input className="senha" type="password"placeholder="Sua senha"/>
          
          
          </div> */}
          {/* <div className="row app-bar-items">
            <AppBarItems />
          </div> */}
        </div>
        <style jsx>{`
          .app-bar {
           
            
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 8px;
            box-sizing: border-box;
          }

          .app-bar-content {
            margin: auto;
            max-width: 960px;
            display: flex;
            align-items: center;
            height: ${appbarHeight};
          }

          :global(body) {
            padding-top: ${appbarHeight};
          }

          @media (max-width: 600px) {
            .app-bar-items {
              display: none;
            }

            .logo  {
              margin-left: 8px;
            }

            .row-name{
              flex: 1;
            }
          }

          @media (min-width: 600px) {
            .row {
              flex: 1;
            }
          }
        `}</style>
      </div>
    </>
  );
}
