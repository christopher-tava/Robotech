"use client";

import Image from "next/image";

export const Encryption = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-30"
      >
        <source src="/videos/encryption-bg.webm" type="video/webm" />
      </video>

      {/* Main content */}
      <div className="flex flex-col items-center text-center px-6 max-w-2xl mx-auto py-20">
        <h1 className="text-4xl font-medium text-white mb-4">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Mission.
        </h1>

        <p className="text-lg text-gray-200 mb-10">
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
          environmentally friendly, and we will donate extra food at the end of the
          event.
        </p>
      

      
    </div>
  );
};
