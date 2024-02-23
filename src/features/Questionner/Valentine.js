import { useState } from "react";
import "../../styles/Valentine.css";

const Valentine = () => {
  const [respondOpacity, setRespondVisbility] = useState(0);

  const showRespond = () => {
    setRespondVisbility(1);
  };

  return (
    <div className="valentine">
      <div className="valentine_title">Valentine :</div>
      <div className="valentine_question">
        I know Mounattii this website is not well designed, I'm so sorry I
        didn't have enough time to give you my best, but I would like to ask
        you, if I told you that I love you so much that you can't imagine, if I
        told you that I love you more than I love myself, if I told you I want
        to stay my whole life with you, would you make me the happiest man ever
        and be my lovely valentine, my beautiful Mounattii 🥹❤️🫂 ?
      </div>
      <button className="valentine_button" onClick={showRespond}>
        Yes I want to be your valentine 🥺❤️🫂 .
      </button>
      <div className="valentine_respond" style={{ opacity: respondOpacity }}>
        Now Mounattii you are my Valentine, but you are not my Valentine just
        for this year, you have just accepted to be my valentine for my whole my
        life, so be ready sweetie 🥹❤️🫂, the crazy boy is coming to you 🤓❤️.
      </div>
    </div>
  );
};

export default Valentine;
