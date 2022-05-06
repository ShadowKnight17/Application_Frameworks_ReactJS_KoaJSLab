import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <a
            href="CreateCuatomerProfile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                textAlign: "center",
                border: "1",
                borderStyle: "solid",
                borderRadius: 25,
                borderColor: "black",
                padding: "20",
                fontSize: "30",
                fontWeight: "400",
                margin: 20,
              }}
            >
              Customer | Register 
            </div>
          </a>
          <a
            href="CreateTraderProfile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                textAlign: "center",
                border: "1",
                borderStyle: "solid",
                borderRadius: 25,
                borderColor: "black",
                padding: "20",
                fontSize: "30",
                fontWeight: "400",
                margin: 20,
              }}
            >
             Trader | Register 
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
