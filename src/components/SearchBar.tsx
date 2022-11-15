import React from "react";
import { MdLogin, MdSearch, MdSend, MdSubdirectoryArrowRight } from "react-icons/md";

export function SearchBar() {
  return (
    <div className="search-bar">
      <div className="icon">
        <MdLogin size="22px" />
      
      </div>

      <style jsx>{`
        .search-bar {
          background-color: #f0f0f0;
          display: flex;
          padding: 8px 14px;
          border-radius: 6px;
        }

        .icon {
          display: flex;
          align-items: center;
          margin-right: 8px;
        }

        input {
          border: 0;
          outline: none;
          width: 100%;
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
