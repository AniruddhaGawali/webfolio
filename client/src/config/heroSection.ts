import { getDate, getShortMonth, getYear } from "@/utils/getDates";

type article = {
  title: string;
  writer: string;
  date: string;
  article: string[];
  articleMobile: string[];
};

var d = new Date();
d.setDate(d.getDate() - 1);

export const HeroSectionData: article = {
  title:
    "Aniruddha Gawali Takes the Tech World by Storm: A Rising Star in  Computer World",
  writer: "J. Jonah Jameson",
  date: getDate(d) + " " + getShortMonth(d) + " " + getYear(d),
  article: [
    "By the time he reached 12th grade, Gawali had already embarked on a thrilling adventure into the realm of programming. Armed with determination and an insatiable curiosity, he honed his skills in an impressive array of programming languages, including C/C++, Python, HTML, CSS, and JavaScript. His journey didn't stop there; he explored various frameworks, such as Angular, ReactJS, and TKinter, solidifying his status as a versatile developer.",

    "In an exclusive interview with Aniruddha Gawali, the promising undergraduate student reveals his extraordinary journey into the world of computer science. From a young age, Gawali's fascination with computers ignited a passion that would shape his future. It was during his high school years that he first dipped his toes into the intriguing world of ethical hacking, a pivotal moment that set him on a path of discovery.",

    "Aniruddha Gawali's dedication to his craft has not gone unnoticed.His passion for software development and coding shines through in his work, where he has undertaken exciting projects in Python and web development. His ability to write clean, efficient code and solve complex problems demonstrates a deep understanding of the digital landscape.",

    "Currently, Aniruddha is not resting on his laurels but is instead setting his sights on expanding his horizons further. He's embarking on a new journey into mobile app development using technologies like Flutter and React Native. This marks a new chapter in his already impressive career, showcasing his adaptability and willingness to stay at the forefront of technology trends.",

    "Beyond his academic pursuits and coding adventures, Gawali finds solace in the worlds of chess and football. This demonstrates that even in the fast-paced realm of technology, a well-rounded passion for life remains vital. These interests not only provide balance but also stimulate creativity and strategic thinking, which are valuable assets in the world of software development.",

    "If you're interested in collaborating with or simply want to connect with this rising star in the software development world, you'll find Aniruddha Gawali accessible through various communication channels. His dedication to his craft, combined with his openness to new challenges and diverse interests, make him an exciting professional to engage with in the ever-evolving field of technology.",

    "Aniruddha Gawali's dedication to his craft has not gone unnoticed. He has undertaken exciting projects in Python and web development, demonstrating a deep understanding of the digital landscape. Currently, he's set his sights on expanding his horizons further by venturing into mobile app development using Flutter and React Native, marking a new chapter in his impressive journey. Beyond his academic pursuits, Gawali finds solace in the worlds of chess and football, demonstrating that even in the fast-paced realm of technology, a well-rounded passion for life remains vital. If you're interested in collaboration or simply want to connect with this rising star, you'll find him accessible through various communication channels.",
  ],
  articleMobile: [
    "Aniruddha Gawali, an exceptional undergraduate, shares his remarkable path in the world of computer science. His fascination with computers ignited during his childhood, leading him to explore ethical hacking during high school. By 12th grade, he had mastered an impressive range of programming languages, including C/C++, Python, HTML, CSS, and JavaScript, along with various frameworks like Angular, ReactJS, and TKinter.",
    "Gawali's dedication to his craft shines through his Python and web development projects, showcasing his profound understanding of the digital realm. Currently, he's set on a new challenge: mobile app development using Flutter and React Native. Beyond academics, he finds joy in chess and football, highlighting the importance of a balanced life. To connect or collaborate, reach out through his various communication channels.",
  ],
};
