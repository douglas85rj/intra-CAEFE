import React from "react";
import { GrFavorite, GrHomeRounded } from "react-icons/gr";

export function TopBarItems() {
  return (
    <div className="top-bar-items">
      <a className="item" href="/">
        <GrFavorite size="22px" />
      </a>
      <a className="item" href="/">
        <GrHomeRounded size="22px" />
      </a>
     
      <style jsx>{`
        .top-bar-items {
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