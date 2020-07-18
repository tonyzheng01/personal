import React from "react";

const StartScreen = (props) => {
  return (
    <div className="py-56 px-56 text-center textColor-primary">
      <p>
        Can you fill in the blank to some of Kanye's most iconic lines? For this
        game, only his solo albums are included, and there is at most one line
        per song. Yes, I know some songs have MANY iconic lines, but then every
        line you see will be from My Beautiful Dark Twisted Fantasy. It current
        as of Jesus Is King. I may or may not update with subsequent albums.
        There are also easter eggs. Hope you enjoy. :)
      </p>
      <p>
        DISCLAIMER: There will be explicit language. Nothing will be censored
        out of respect for the artist.
      </p>
      <button
        onClick={props.onStart}
        className="font-bold py-2 px-4 m-16 rounded"
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
