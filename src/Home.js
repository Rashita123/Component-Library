import "./Home.css";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Button } from "forkui-lib";
export default function Home({ setHomeOrDocs }) {
  return (
    <div className="home">
      <div className="home__title">Fork the UI</div>
      <p className="home__line">
        Make Custom <span className="home__react">React</span> Components using{" "}
        <br />
        ForkUI in seconds!
      </p>
      <div class="home__buttons">
        <span className="home__button-I">
          <Button
            rightIcon={<FiArrowRight />}
            onClickHandler={() => setHomeOrDocs("Docs")}
            text="Get Started"
            variant="secondary"
            color="white"
            borderColor="white"
          />
        </span>
        <a href="https://github.com/Rashita123/ForkUI">
          <Button
            leftIcon={<FaGithub />}
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
