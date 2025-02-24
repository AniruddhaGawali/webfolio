import { useEffect, useState } from "react";
import "../styles/stars.css";
import { Textarea } from "./ui/TextArea";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import Modal from "./ui/Modal";

function WebfolioNavbar() {
  const [heightOfHeader, setHeightOfHeader] = useState(100);
  const [mode, setMode] = useState("light");
  const [openModal, setOpenModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleMakeWish = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    const star = e.target as HTMLSpanElement;
    if (!star.classList.contains("star-wished")) {
      setOpenModal(true);
    }
    star.classList.add("star-wished");
  };

  const handleWishClick = () => {
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
    setOpenModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = Math.max(10, 100 - (scrollY / 100) * 100); // Prevents it from shrinking too much
      setHeightOfHeader(height);
    };

    const handleModeChange = (e: MediaQueryListEvent) => {
      setMode(e.matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setMode(mediaQuery.matches ? "dark" : "light");

    window.addEventListener("scroll", handleScroll);
    mediaQuery.addEventListener("change", handleModeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleModeChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fontSizeOfHero = `clamp(
  ${screenWidth < 640 ? "1rem" : "1.5rem"}
  , ${
    screenWidth < 640
      ? `${heightOfHeader * 0.1 + 1}rem`
      : `${heightOfHeader * 0.1}rem`
  }
  , ${
    screenWidth < 640
      ? `${heightOfHeader > 40 ? "2.8rem" : "1rem"}`
      : `${screenWidth * 0.01 - 2}rem`
  })`;

  const fontSizeOfNavbar = `clamp(
    ${screenWidth < 640 ? "1rem" : ".8rem"},
    ${heightOfHeader * 0.01 + 2}dvw, 
    ${heightOfHeader > 40 ? "2.5dvw" : "1.5dvw"}
  )`;

  const navItemWidth =
    heightOfHeader < 40
      ? screenWidth < 768
        ? "calc(100%/3)"
        : "fit-content"
      : screenWidth < 1024
        ? "calc(100% / 3)"
        : "20dvw";

  const darkModeGradient = `linear-gradient(-45deg, hsla(var(--p4), ${heightOfHeader < 90 ? heightOfHeader / 100 - 0.1 : 1}) 0%, 
        hsla(var(--p3), ${heightOfHeader < 90 ? heightOfHeader / 100 - 0.1 : 1}) 25%, 
        hsla(var(--p2), ${heightOfHeader < 90 ? heightOfHeader / 100 - 0.1 : 1}) 35%, 
        hsla(var(--p1), ${heightOfHeader < 90 ? heightOfHeader / 100 - 0.1 : 1}) 100%)`;

  const lightModeGradient = `linear-gradient(-45deg, hsla(var(--p3), ${heightOfHeader < 90 ? heightOfHeader / 100 - 0.1 : 1}) 0%, 
        hsla(var(--p2), ${heightOfHeader < 90 ? heightOfHeader / 100 - 0.1 : 1}) 25%, 
        hsla(var(--p1), ${heightOfHeader < 90 ? heightOfHeader / 100 - 0.1 : 1}) 100%)`;

  return (
    <>
      <header
        style={{
          height: heightOfHeader + "dvh",
          flexDirection: heightOfHeader < 40 ? "row" : "column",
          backgroundImage:
            mode === "light" ? lightModeGradient : darkModeGradient,

          position: "fixed",
        }}
        className={`relative left-0 top-0 z-10 flex min-h-[10dvh] min-w-full flex-col items-start justify-center overflow-hidden`}
      >
        <h1
          style={{
            fontSize: fontSizeOfHero,
          }}
          className={`ml-4 flex h-full cursor-pointer items-center justify-center whitespace-nowrap font-daretro-mandra text-[9.5rem] uppercase ${heightOfHeader < 40 ? "text-p2 dark:text-p1-foreground" : "text-p1-foreground"} sm:ml-8 xl:ml-12`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a>
            Aniruddha{" "}
            <br
              style={{
                display: heightOfHeader < 40 ? "none" : "block",
              }}
            />{" "}
            Gawali
          </a>
        </h1>
        <div
          style={{
            display: heightOfHeader < 20 ? "none" : "block",
          }}
          className="absolute left-0 top-0 h-full w-full"
        >
          <span className="star" onClick={handleMakeWish}></span>
          <span className="star" onClick={handleMakeWish}></span>
          <span className="star" onClick={handleMakeWish}></span>
        </div>

        <div
          style={{
            display: heightOfHeader < 20 ? "none" : "block",
          }}
          className="absolute left-0 top-0 h-full w-full"
        >
          <span className="cloud"></span>
          <span className="cloud"></span>
          <span className="cloud"></span>
        </div>

        <div
          onClick={() => setShowMenu(!showMenu)}
          style={{
            transform: `rotate(${showMenu ? "90deg" : "0"})`,
            fontSize: showMenu ? "2.25rem" : "2.5rem",
            display: heightOfHeader < 40 && screenWidth < 768 ? "flex" : "none",
            color: showMenu
              ? "hsl(var(--p1-foreground))"
              : mode == "light"
                ? "hsl(var(--p1))"
                : "hsl(var(--p1-foreground))",
          }}
          className="yarndings-20-regular absolute right-5 top-3 z-[9999] rounded-full text-4xl transition-all duration-200"
        >
          {showMenu ? "0" : "1"}
        </div>

        <nav
          style={{
            fontSize: fontSizeOfNavbar,
            position:
              heightOfHeader < 40
                ? screenWidth < 768
                  ? "fixed"
                  : "relative"
                : "absolute",
            marginTop: heightOfHeader < 40 ? "0" : "8dvh",
            height:
              heightOfHeader < 40
                ? screenWidth < 768
                  ? showMenu
                    ? "100%"
                    : "0vh"
                  : "100%"
                : "100%",

            backgroundColor:
              heightOfHeader < 40 && screenWidth < 768
                ? "hsl(var(--p2))"
                : "transparent",

            zIndex: heightOfHeader < 40 ? (showMenu ? "100" : "-1") : "0",
          }}
          className={`bottom-0 right-0 mt-8 flex w-full ${heightOfHeader < 40 ? "top-0 flex-col items-center justify-center text-p1-foreground md:flex-row md:items-end md:justify-end md:text-p2 md:dark:text-p1-foreground" : "items-end justify-end text-p1-foreground"} overflow-hidden text-nowrap font-boone uppercase sm:px-8`}
        >
          <a
            href="#selected-project"
            style={{
              width: navItemWidth,
            }}
            className={`group flex ${heightOfHeader < 40 ? "h-fit md:h-full" : "h-full"} items-end justify-center text-center`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#selected-project")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              showMenu && setShowMenu(false);
            }}
          >
            <div
              style={{
                padding: heightOfHeader < 20 ? "0 1rem" : "0",
                paddingBottom: heightOfHeader < 20 ? "1.2rem" : "1rem",
              }}
              className={`flex h-[5%] w-full items-end justify-center gap-2 pb-4 transition-[height,background-color] delay-300 duration-500 group-hover:h-[100%] group-hover:delay-0 ${heightOfHeader > 20 && "group-hover:bg-white/10 group-hover:backdrop-blur-md dark:group-hover:bg-lime-500/20"}`}
            >
              <div className="flex w-full items-center justify-center gap-4 transition-none">
                <span className="yarndings-20-regular mb-1 text-sm opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 md:text-xl">
                  {" "}
                  W{" "}
                </span>
                Projects
                <span className="yarndings-20-regular mb-1 text-sm opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 md:text-xl">
                  {" "}
                  W{" "}
                </span>
              </div>
            </div>
          </a>

          <a
            href="/blogs"
            style={{
              width: navItemWidth,
            }}
            className={`group flex ${heightOfHeader < 40 ? "h-fit md:h-full" : "h-full"} items-end justify-center text-center`}
          >
            <div
              style={{
                padding: heightOfHeader < 20 ? "0 1rem" : "0",
                paddingBottom: heightOfHeader < 20 ? "1.2rem" : "1rem",
              }}
              className={`flex h-[5%] w-full items-end justify-center gap-2 pb-4 transition-[height,background-color] delay-300 duration-500 group-hover:h-[100%] group-hover:delay-0 ${heightOfHeader > 20 && "group-hover:bg-white/10 group-hover:backdrop-blur-md dark:group-hover:bg-yellow-500/20"}`}
            >
              <div className="flex w-full items-center justify-center gap-4">
                <span className="yarndings-20-regular mb-1 text-sm lowercase opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 md:text-xl">
                  r
                </span>
                Blogs
                <span className="yarndings-20-regular mb-1 text-sm lowercase opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 md:text-xl">
                  r
                </span>
              </div>
            </div>
          </a>
          <a
            href="#contact-me"
            style={{
              width: navItemWidth,
            }}
            className={`group flex ${heightOfHeader < 40 ? "h-fit md:h-full" : "h-full"} items-end justify-center text-center`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact-me")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <div
              style={{
                padding: heightOfHeader < 20 ? "0 1rem" : "0",
                paddingBottom: heightOfHeader < 20 ? "1.2rem" : "1rem",
              }}
              className={`flex h-[5%] w-full items-end justify-center gap-2 pb-4 transition-[height,background-color] delay-300 duration-500 group-hover:h-[100%] group-hover:delay-0 ${heightOfHeader > 20 && "group-hover:bg-white/10 group-hover:backdrop-blur-md dark:group-hover:bg-rose-500/20"}`}
            >
              <div className="flex w-full items-center justify-center">
                <div className="flex items-center gap-4">
                  <span className="yarndings-20-regular mb-1 text-sm lowercase opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 md:text-xl">
                    y
                  </span>
                  Contact Me
                  <span className="yarndings-20-regular mb-1 text-sm lowercase opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 md:text-xl">
                    y
                  </span>
                </div>
              </div>
            </div>
          </a>
        </nav>
      </header>

      <Modal isOpen={openModal} setOpenModal={setOpenModal}>
        <h1 className="w-fit text-3xl font-semibold">
          Make Your{" "}
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            {" "}
            Wish
          </span>
        </h1>
        <div className="mt-8 flex w-full flex-col gap-2">
          <label
            htmlFor="wish-box"
            className="flex w-fit items-center justify-center gap-1"
          >
            <span className="text-sm font-semibold">Your Wish</span>
          </label>
          <Textarea
            id="wish-box"
            name="wish-box"
            className="w-full"
            placeholder="write your wish..."
            rows={8}
            maxLength={300}
          />

          <label
            htmlFor="wish-name"
            className="flex w-fit items-center justify-center gap-1"
          >
            <span className="text-sm font-semibold">Your Name</span>
          </label>
          <Input className="max-w-sm" id="wish-name" name="wish-name" />

          <Button className="w-fit" onClick={handleWishClick}>
            <span className="yarndings-20-regular text-xl">X</span>Bless Me
          </Button>

          {/* Video Popup */}
          {showVideo && (
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/80">
              <video
                src="/video/wish-video.mp4"
                autoPlay
                muted
                className="h-full max-h-full w-full max-w-full object-cover"
                onEnded={handleVideoEnd}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default WebfolioNavbar;
