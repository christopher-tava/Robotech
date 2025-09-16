"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0">
       <motion.div
  variants={slideInFromTop}
  initial="hidden"
  animate="show"
  className="text-[40px] font-medium text-center text-white drop-shadow-md z-20"
>
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Mission. 

            <motion.p
    variants={slideInFromTop(0.8)}
    initial="hidden"
    animate="show"
    className="text-lg text-gray-300 my-5 max-w-[600px]"
  >
          The Robotech Hackathon is the annual robotics hackathon run by the IEEE student chapter at Georgia Tech. Within the allotted 36 hours, teams of four individuals race to design, build, and test a robot to complete a set of engineering goals and competition tasks. Excellent collaboration and an element of strategy will be required to maximize a team’s score. Teams compete in one of several tracks differentiated by competition focus and experience. Products are judged by a panel of judges on the last day of the hackathon.

It is completely FREE to participate in this hackathon. We accept undergraduates, graduate students, and university students within driving distance of Georgia Tech who are able to arrange their own transportation. The majority of meals will also be provided to competitors for free; please read the FAQ for specifics. Competitors also receive a free t-shirt.

IEEE @ GT is also proud to take steps to reduce the environmental impact of our event. All provided plates, utensils, cups and napkins will be environmentally-friendly, and we will donate extra food at the end of the event.

        </motion.p>

        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          This Year's Theme{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Tracks.

           <motion.p
          variants={slideInFromTop(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Interstellar’s Cooper wisely summed human fascination with space when he declared, “Mankind was born on Earth. It was never meant to die here.” The next century will undoubtedly see exciting innovations in space exploration as a result of creative engineering solutions. As such, IEEE @ GT challenges you to build your own lunar space robot to demonstrate your creative approach to navigating space. The competition will focus on terrain navigation and interaction, including but not limited to obstacle avoidance, article placement, and potential human-robot collaboration. The tracks, listed below, allow competitors to concentrate in specific areas of the event that interest them. You can only apply to one track.

As the event approaches, we will release a tentative point rubric for each track. Teams will receive points for each element of the robot that they build and for each task that their robot completes. Certain features and tasks will be worth more than others due to expected difficulty. However, each robot will have exactly 4 minutes to execute their features and tasks, so teams are encouraged to plan ahead of time and understand how to maximize their point totals based on their strengths.


Tracks:

Autonomous: robot is making decisions itself

Controller/Communication: team builds a rf or wired controller to operate robot

Beginner: open opportunity for younger/inexperienced students to participate in the hackathon and compete

        </motion.p>

        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/IEEE_LOGO.png"
            alt="IEEE Logo"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
