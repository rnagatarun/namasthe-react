import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-3 m-3">Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <input
          type="email"
          className="border border-black p-2 m-2"
          placeholder="Email"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
