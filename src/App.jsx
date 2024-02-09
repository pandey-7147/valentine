import { useState } from "react";
import lovesvg from "./assets/background.jpeg";
// import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/stare.jpeg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 40;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure Miss?",
      "Ek Choti Feri Socha Na...",
      "Baby? Is this you?",
      "This is Ayushma right?",
      "I can't believe you are saying no so many times!",
      "lala thikai cha?",
      "You will regret this!",
      "Baby please give me another thought!",
      "Are you absolutely certain?",
      "This could be a mistake AYUSHMAAA",
      "Oe tero heart chaina ho? !",
      "Baby side ma tetro thulo YESSSS cha kina no ma click gariraaaaa",
      "Don't be so cold yar Come ON!",
      "Heart Transplant garya ho?",
      "Wouldn't you reconsider babe?",
      "Is that your final answer Lock Kardiya Jayee?",
      "You're breaking my heart;(",
      "Ma runchu aaba?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
      "Ja Boldina. Katti!",
      "Lonely, I am so lonely!",
      "I have nobody!",
      "I am all on my ownnnn!",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="background2 text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
            <br/>
            Guys Listen...! 
            <br/> I got a date for Valentines and she is HOTTTT af. 
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-60 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[110px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="background text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={` bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="button bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      I love you Miss{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
