import type { Profile } from "@/types";

export const profileData: Profile = {
  name: "Nanda Pratama",
  region: "Indonesia",
  CV: "/public/assets/pdf/Cv.pdf",
  divisions: ["Frontend Developer", "Ui/Ux Design", ""],
  pictures: ["/assets/images/lex.png", "/assets/images/lex.png"],
  descriptions: [
    "I create stunning websites for your business, Intermediate experienced in web design and development.",
    "Hello everyone! I am Nanda Pratama, a frontend mobile and website developer. I am an intermediate experienced and I hope with this I can always learn something new to be able to invent websites that can help many people in the future. Could work independently or in a team.",
  ],
  experiences: [
    {
      number: 2,
      title: "Years Of Experience",
    },
    {
      number: 4,
      title: "Framework & Tech Stack Used",
    },
    {
      number: 8,
      title: "Succeeded Projects",
    },
  ],
};
