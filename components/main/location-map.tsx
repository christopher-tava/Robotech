"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const LocationMap = () => {
  const venue = {
    name: "Klaus Advanced Computing Building",
    address: "266 Ferst Dr NW, Atlanta, GA 30332, USA",
    mapsUrl: "https://www.google.com/maps/place/Klaus+Advanced+Computing+Building/@33.7772854,-84.3984449,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5048327cf81a1:0x426d4b6f5d7d3b3!8m2!3d33.7772854!4d-84.39587!16s%2Fg%2F1thz8tc4"
  };

  return (
    <section
      id="location"
      className="flex flex-col items-center justify-center py-20 px-6"
    >
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="mb-8"
      >
        <h2 className="text-4xl font-medium text-white text-center mb-2">
          Location
        </h2>
        <p className="text-gray-400 text-center">
          Join us at Georgia Tech&apos;s Klaus Advanced Computing Building
        </p>
      </motion.div>

      {/* Content Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="w-full max-w-5xl"
      >
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Venue Details */}
          <div className="bg-[rgba(3,0,20,0.6)] backdrop-blur-md border border-[#2A0E61] rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              {venue.name}
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-300 font-medium">Address</p>
                  <p className="text-gray-400">{venue.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-gray-300 font-medium">Date & Time</p>
                  <p className="text-gray-400">January 23-25, 2026</p>
                  <p className="text-gray-400 text-sm">36-hour hackathon</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-300 font-medium">Parking</p>
                  <p className="text-gray-400 text-sm">
                    Visitor parking available at Tech Square and W01 Visitor Parking Deck
                  </p>
                </div>
              </div>
            </div>

            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Open in Google Maps
            </a>
          </div>

          {/* Embedded Map */}
          <div className="relative rounded-lg overflow-hidden border border-[#2A0E61] shadow-lg h-[400px] bg-[rgba(3,0,20,0.6)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.644798547744!2d-84.39844489999999!3d33.777285373271076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5048327cf81a1%3A0x426d4b6f5d7d3b3!2sKlaus%20Advanced%20Computing%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klaus Advanced Computing Building Location"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};