import React from "react";

const Map = () => {
  return (
    <div className="w-full relative h-[70vh] mb-20 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.177113550052!2d77.54813299999999!3d8.083412500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed24dbcd81e9%3A0x521bf8103d1a1232!2sSri%20Maniya%20Institute%20of%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1757673979727!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
    </div>
  );
};

export default Map;
