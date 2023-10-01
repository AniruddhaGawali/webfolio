import React from "react";

const Social = () => {
  return (
    <div className="mt-5 flex justify-center gap-2 text-center text-base capitalize italic">
      <a
        className="hover:underline"
        href="https://www.linkedin.com/in/aniruddha-gawali-617804230/"
      >
        LinkedIn
      </a>
      |{" "}
      <a className="hover:underline" href="https://twitter.com/AniruddhaAKG">
        Twitter
      </a>
      |{" "}
      <a
        className="hover:underline"
        href="https://www.instagram.com/aniruddha.gawali/"
      >
        Instagram
      </a>
      |{" "}
      <a className="hover:underline" href="mailto:aniruddhagawali03@gmail.com">
        Email
      </a>
    </div>
  );
};

export default Social;
