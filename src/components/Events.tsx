import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { events } from "../data/events";

export const Events = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentEventIndex];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Events & Workshops
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our upcoming events, workshops, and learning
            opportunities designed to enhance your skills and knowledge.
          </p>
        </div>

        {/* Events Carousel */}
        <div className="flex items-center justify-center space-x-8 mb-10">
          {/* Left Arrow (outside) */}
          {events.length > 1 && (
            <button
              onClick={prevEvent}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-200"
              aria-label="Previous event"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          {/* Event Card (wider) */}
          <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
            <div className="lg:flex">
              {/* Left Side */}
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                    {currentEvent.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      currentEvent.status === "Completed"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : currentEvent.status === "Ongoing"
                        ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                        : currentEvent.status === "Upcoming"
                        ? "bg-blue-100 text-blue-800 border border-blue-300"
                        : "bg-gray-200 text-gray-700"
                    }
                  `}
                  >
                    {currentEvent.status}
                  </span>
                </div>
                <p className="mb-8 text-blue-100 text-lg leading-relaxed">
                  {currentEvent.description}
                </p>
              </div>

              {/* Right Side */}
              <div className="lg:w-1/2 p-10 lg:p-14 bg-white">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700 text-lg">
                    {currentEvent.date}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700 text-lg">
                    {currentEvent.time}
                  </span>
                </div>
                <div className="flex items-center mb-8">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700 text-lg">
                    {currentEvent.location}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    Highlights
                  </h4>
                  <ul className="text-gray-600 space-y-2 text-lg">
                    {currentEvent.learningPoints.map((point, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow (outside) */}
          {events.length > 1 && (
            <button
              onClick={nextEvent}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-200"
              aria-label="Next event"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
        </div>

        {/* Carousel Indicators */}
        {events.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  index === currentEventIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
