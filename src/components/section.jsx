import React, { useState } from "react";

export const Section = () => {
  const [cardClose, setCardClose] = useState("section-card__close");
  const [cardOpen, setCardOpen] = useState("section-card__open");
  const handleHover = (event) => {
    const parentNode = event.target.parentNode;
    const listChildNode = parentNode.childNodes;
    event.target.classList.replace("section-card__close", "section-card__open");
    listChildNode[0].classList.replace(
      "section-card__open",
      "section-card__close"
    );
    if (parentNode.children[0].offsetWidth === 300) {
      parentNode.children[0].children[0].style.setProperty("opacity", 0);
      parentNode.children[0].children[1].style.setProperty("opacity", 0);
      parentNode.children[0].children[0].style.setProperty(
        "transition",
        "all .2s ease-in-out"
      );
      parentNode.children[0].children[1].style.setProperty(
        "transition",
        "all .2s ease-in-out"
      );

      //second card
      event.target.children[0].style.setProperty(
        "transform",
        `rotate(${0})deg`
      );

      event.target.children[0].style.setProperty(
        "background-color",
        `transparent`
      );
      event.target.children[0].style.setProperty(
        "transition",
        "all .2s ease-int-out"
      );
    }
  };

  const handleHoverClose = (event) => {
    const parentNode = event.target.parentNode;
    const listChildNode = parentNode.childNodes;
    event.target.classList.replace("section-card__open", "section-card__close");
    listChildNode[0].classList.replace(
      "section-card__close",
      "section-card__open"
    );
    parentNode.children[0].children[0].style.setProperty("opacity", 1);
    parentNode.children[0].children[1].style.setProperty("opacity", 1);
    parentNode.children[0].children[0].style.setProperty(
      "transition",
      "all .2s ease-in-out"
    );
    parentNode.children[0].children[1].style.setProperty(
      "transition",
      "all .2s ease-in-out"
    );

    //second card
    event.target.children[0].style.setProperty(
      "transform",
      `rotate(${-90}deg)`
    );

    event.target.children[0].style.setProperty(
      "background-color",
      `rgb(13, 0, 11)`
    );
    event.target.children[0].style.setProperty(
      "transition",
      "all .2s ease-int-out"
    );
  };

  return (
    <section>
      <div className="section">
        <div className="section-word">
          <div className="container-multiple-word">
            <h1>Watch</h1>
            <h1>Learn</h1>
            <h1>Grow</h1>
          </div>
          <div className="section-find">
            <div className="section-find-div display-flex-center">
              <span className="section-find-text">Find your passion</span>
            </div>
            <div className="section-go display-flex-center">
              <a className="section-go-big">go</a>
            </div>
          </div>
        </div>
        <div className="section-card">
          <div className={`section-image__background__boy1 ${cardOpen}`}>
            <div>
              <span>writing</span>
              <span>course</span>
            </div>
            <div>
              <span className="word-100">100</span>
              <span className="word-topics">topics</span>
            </div>
          </div>
          <div
            className={`section-image__background__girl ${cardClose}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverClose}
          ></div>

          <div
            className={`section-image__background__boy2  ${cardClose}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverClose}
          ></div>
        </div>
      </div>
    </section>
  );
};
