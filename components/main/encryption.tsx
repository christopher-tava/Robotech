"use client";

import Image from "next/image";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute top-0 z-20 w-auto h-auto text-center">
        <h1 className="text-[40px] font-medium text-white drop-shadow-md">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Mission.
        </h1>

        <p className="text-lg text-gray-200 my-5 max-w-[600px] mx-auto">
          The Robotech Hackathon is the annual robotics hackathon run by the IEEE
          student chapter at Georgia Tech. Within the allotted 36 hours, teams of
          four individuals race to design, build, and test a robot to complete a
          set of engineering goals and competition tasks. Excellent collaboration
          and an element of strategy will be required to maximize a team score.
          Teams compete in one of several tracks differentiated by competition focus
          and experience. Products are judged by a panel of judges on the last day
          of the hackathon.
          <br />
          <br />
          It is completely FREE to participate in this hackathon. We accept
          undergraduates, graduate students, and university students within driving
          distance of Georgia Tech who are able to arrange their own transportation.
          The majority of meals will also be provided to competitors for free; please
          read the FAQ for specifics. Competitors also receive a free t-shirt.
          <br />
          <br />
          IEEE @ GT is also proud to take steps to reduce the environmental impact
          of our event. All provided plates, utensils, cups and napkins will be
          environmentally-friendly, and we will donate extra food at the end of the
          event.
        </p>

        <h2 className="text-[40px] font-medium text-gray-100 mt-12">
          Theme{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Tracks.
        </h2>

        <p className="text-lg text-gray-300 my-5 max-w-[600px] mx-auto">
           Cooper from the movie Interstellar wisely summed human fascination with space when he
          declared, “Mankind was born on Earth. It was never meant to die here.”
          The next century will undoubtedly see exciting innovations in space
          exploration as a result of creative engineering solutions. As such, IEEE @
          GT challenges you to build your own lunar space robot to demonstrate your
          creative approach to navigating space. The competition will focus on terrain
          navigation and interaction, including but not limited to obstacle avoidance,
          article placement, and potential human-robot collaboration.
          <br />
          <br />
          Tracks:
          <br />
          • Autonomous — robot is making decisions itself  
          • Controller/Communication — team builds an RF or wired controller to operate the robot  
          • Beginner — open opportunity for younger/inexperienced students to participate
        </p>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-20">
        <div className="flex flex-col items-center group cursor-pointer">
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

        <div className="Welcome-box px-[15px] py-[4px] z-20 border my-[20px] border-[#7042F88B] opacity-90">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-20 bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      <div className="absolute w-full flex items-start justify-center z-0">
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
