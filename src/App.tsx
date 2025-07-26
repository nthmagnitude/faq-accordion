import iconStar from "./assets/images/icon-star.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import heroDesktopImage from "./assets/images/background-pattern-desktop.svg";
import heroMobileImage from "./assets/images/background-pattern-desktop.svg";
import { useState } from "react";

type AccordionProp = {
  question: string;
  answer: string;
  index: number;
  activeIndex: number | null;
  changeState: React.Dispatch<React.SetStateAction<number | null>>;
};

function Accordion({
  question,
  answer,
  index,
  changeState,
  activeIndex,
}: AccordionProp) {
  const active = activeIndex === index;
  return (
    <div className="not-last:border-b border-purple-100">
      <div
        className="py-2  w-full cursor-pointer mb-4 flex flex-row justify-between items-center hover:text-purple-800"
        onClick={() => changeState(active ? null : index)}
      >
        <p className="font-bold">{question}</p>
        <img src={active ? iconMinus : iconPlus} alt="" />
      </div>
      <div
        className={`overflow-hidden grid ${
          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mb-2">{answer}</div>
      </div>
    </div>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const qa = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
  return (
    <div className="w-screen flex-col items-center justify-center bg-purple-100 h-screen">
      <picture>
        <source srcSet={heroMobileImage} media="(max-width: 400px)" />
        <img
          src={heroDesktopImage}
          alt=""
          className="w-full h-1/3 object-cover"
        />
      </picture>
      <div className="container rounded-2xl md:p-10 p-4 md:w-[600px] w-[90%]  -translate-y-20 bg-white m-auto shadow-purple-600 shadow-xl/15">
        <section className="flex flex-row space-x-4 items-center mb-8">
          <img src={iconStar} alt="star" className="text-4xl" />
          <h1 className="text-5xl font-bold ">FAQs</h1>
        </section>
        <div>
          {qa.map((item, index) => (
            <Accordion
              question={item.question}
              answer={item.answer}
              index={index}
              activeIndex={activeIndex}
              changeState={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
