import React, { useRef } from "react";
import { RxCross1 } from "react-icons/rx";
function Contact({ onClose }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  text-white">
        <button className="place-self-end p-2" onClick={onClose}>
          <RxCross1 size={20} color="black" />
        </button>
        <div className=" mx-4 mb-4 p-4 bg-blue-950 rounded-xl px-5 flex flex-col text-base text-left box-shadow">
          <p>
            Email: <span className="">head.sathm@dauniv.ac.in</span>
          </p>
          <p>
            Address: <span>Takshila Campus,Khandwa road Indore</span>
          </p>
          <p>Contact: 9098354300 <span>(Mr.Anshul Jain)</span></p>
          <p>Contact: 8103586406<span>(Ms.Anamika Shukla)</span></p>
          <p>Contact: 8989456828 <span>(Mr. Alok A.Jha)</span></p>
          <h3>For more details Contact to</h3>
          <p>Prof.Preeti Singh (Head, SATHM) <span>9425349044</span></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
