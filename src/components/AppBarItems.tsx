import React from "react";
import { GrFavorite, GrHomeRounded } from "react-icons/gr";
import { Avatar } from "./Avatar";

export function AppBarItems() {
  return (
    <div className="app-bar-items">
      <a className="item" href="/">Login/Cadastre-se
        
        
</a>

      <style jsx>{`
        .app-bar-items {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .item {
          display: flex;
          align-items: center;
        }

        .item:not(:first-child) {
          margin-left: 22px;
        }
      `}</style>
    </div>
  );
}
