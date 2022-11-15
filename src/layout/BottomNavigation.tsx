import React from "react";
import { GrFavorite, GrHomeRounded } from "react-icons/gr";
import { Avatar } from "../components/Avatar";
import { SearchBar } from "../components/SearchBar";

const bottomNavigationHeight = "48px";

export function BottomNavigation() {
  return (
    <div className="bottom-navigation">
      <span className="item">
        <Avatar src="https://i.ibb.co/V23YcZQ/logo-caefe.png" />
      </span>
      <a className="item" href="/">
        <SearchBar/>
      </a>
     
      <style jsx>{`
        .bottom-navigation {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: #fff;
          border-top: 1px solid #ccc;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: ${bottomNavigationHeight};
        }

        .item {
          display: flex;
          align-items: center;
          justify-content: center;
          
        }
        


        }

        :global(body) {
          padding-bottom: ${bottomNavigationHeight};
        }

        @media (min-width: 600px) {
          .bottom-navigation {
            display: none !important; 
          }
        }
      `}</style>
    </div>
  );
}
