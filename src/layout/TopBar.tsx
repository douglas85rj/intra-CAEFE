import React from "react";
import {caefeLogo} from "../components/caefeLogo";
import {TopBarItems} from "../components/TopBarItems";

const topbarHeight = "70px";

export function TopBar() {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="row caefe-logo">
            <a href="/">
              <caefeLogo height= "32px" />
            </a>
          </div>
        
          <div className="row top-bar-items">
            <TopBarItems />
          </div>
        </div>
        <style jsx>{`
          .top-bar {
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 8px;
            box-sizing: border-box;
          }
          .top-bar-content {
            margin: auto;
            max-width: 960px;
            display: flex;
            align-items: center;
            height: ${topbarHeight};
          }
          :global(body) {
            padding-top: ${topbarHeight};
          }
          @media (max-width: 600px) {
            .app-bar-items {
              display: none;
            }
            .caefe-logo {
              margin-right: 8px;
            }
            .search-bar {
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