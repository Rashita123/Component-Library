import "./Home.css";
import React from "react";
import { Button } from "./MainArea/Button/Button";
export default function Home({ setHomeOrDocs }) {
  return (
    <div className="home">
      <div className="home__title">Fork the UI</div>
      <p className="home__line">
        Make Custom <span className="home__react">React</span> Components using{" "}
        <br />
        ForkUI in seconds!
      </p>
      <div>
        <span className="home__button-I">
          <Button
            onClickHandler={() => setHomeOrDocs("Docs")}
            text="Get Started"
            variant="secondary"
            color="white"
            borderColor="white"
          />
        </span>
        <a href="https://github.com/Rashita123/ForkUI">
          <Button
            text="Github"
            variant="primary"
            background="white"
            color="#20a546"
            borderColor="white"
          />
        </a>
      </div>
    </div>
  );
}
