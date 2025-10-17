import React from "react";

const ScheduleEvent: React.FC = () => {
  return (
   <div className="container mx-auto">
     <section className="flex flex-col items-center justify-center w-full my-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Hackathon schedule
        </h2>
    </section>
    
    <div className="w-full max-w-3xl md:max-w-4xl mx-auto flex flex-col gap-4">
    <div className="w-full max-w-3xl md:max-w-4xl h-[500px] md:h-[600px] border border-purple-500 rounded-xl overflow-hidden shadow-lg mx-auto">
        <iframe src="https://calendar.google.com/calendar/embed?src=55da9ea4baafb3eaaa40ecc61e1103277849cf8b21fd08c78bf02a4f87a5cbba%40group.calendar.google.com&ctz=America%2FNew_York"
            className="w-full h-full" frameBorder="0" scrolling="no"
        ></iframe>
    </div>
    <br/>
    <div>
        <a
        href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Robotech+Hackathon&dates=20260123T090000Z/20260125T170000Z&details=Join+us+for+the+Robotech+Hackathon+2026!&location=Georgia+Tech"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
      >
        Add to Google Calendar
      </a>
    </div>
    </div>
   </div>
  );
}
export default ScheduleEvent;