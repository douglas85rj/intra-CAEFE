import React from "react";
import { Link } from "gatsby";
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
          <Link to="/">
              <h1>
                <Logo height="32px" />
              </h1>
            </Link>
          </div>
          <div className="row search-bar">
            <SearchBar />
          </div>
          {/* <div className="row-name"> 

<AppBarItems />
          
          </div> */}
          <div className="row app-bar-items">
            <AppBarItems />
          </div>
        </div>
        <style jsx>{`
          .app-bar {
            background-color: #CCFFFF;
            border-bottom: 1px solid #99FFFF;            
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 8px;
            box-sizing: border-box;
            z-index: 1;
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
              margin-right: 8px;
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
