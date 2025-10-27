
// 'use client'
// import { useState } from "react"
// import emailjs from "@emailjs/browser"
// import { Mail} from 'lucide-react'
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import env from 'dotenv'


// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", title: "", email: "",message:"" })
//   const [sent, setSent] = useState(false)

//   const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   const { name, value } = e.target;
//   setForm((prev) => ({ ...prev, [name]: value }));
// };


//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault()
//     emailjs
//       .send(
//         process.env.NEXT_PUBLIC_SERVICE_ID||"",
//         process.env.NEXT_PUBLIC_TEMPLATE_ID||"" ,
//         {
//           name: form.name,
//           time: new Date().toLocaleString(),
//           title: form.title,
//           email: form.email,
//         },
//         process.env.NEXT_PUBLIC_KEY||""
//       )
//       .then(() => setSent(true))
//   }

//   return (
//       <main className="w-full text-gray-200 flex flex-col items-center justify-between px-16 py-24 font-mono">
//   <div className="max-w-6xl w-full grid md:grid-cols-2 gap-35">

//     <div className="flex flex-col justify-center space-y-10">
//       <div className="text-2xl md:text-6xl font-semibold text-gray-100">
//         Let’s <span className="text-primary">collab</span> and build something epic.
//       </div>
//       <p className="text-gray-400 text-lg tracking-wide">
//         Ping on my socials
//       </p>
//       <div className="flex space-x-5 mt-4">
//             <a href="https://github.com/ananya-dhiman" target="_blank" rel="noreferrer">
//               <FaGithub className="w-7 h-7 hover:text-primary transition" />
//             </a>
//             <a href="https://www.linkedin.com/in/ananya-dhiman-260876282/" target="_blank" rel="noreferrer">
//               <FaLinkedin className="w-7 h-7 hover:text-primary transition" />
//             </a>
//             <a href="https://x.com/DhimanAnan14116" target="_blank" rel="noreferrer">
//               <FaXTwitter className="w-7 h-7 hover:text-primary transition" />
//             </a>
//             <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
//               <Mail className="w-7 h-7 hover:text-primary transition" />
//             </a>
//           </div>
//     </div>

  

//         <form
//   onSubmit={sendEmail}
//   className="text-xl mt-5 space-y-7 w-full"
// >
//   <div>
//     My name is{" "}
//     <div className="">
//       <input
//         type="text"
//         name="name"
//         value={form.name}
//         onChange={handleChange}
        
//         className="w-full  text-base  bg-transparent border-b-2 border-gray-600  focus:border-primary outline-none px-3 py-2 placeholder:text-base placeholder:text-gray-400 transition-all"
//       />
//     </div>
//   </div>

//   <div>
//     Title
//     <div className="mt-2">
//       <input
//         type="text"
//         name="title"
//         value={form.title}
//         onChange={handleChange}
//         placeholder="Name it"
//         className="w-full text-base bg-transparent border-b-2 border-gray-600  focus:border-primary outline-none px-3 py-2 placeholder:text-base placeholder:text-gray-400 transition-all"
//       />
//     </div>
//   </div>

//   <div>
//     Message
//     <div className="mt-2">
//       <textarea
//         name="message"
//         value={form.message}
//         onChange={handleChange}
//         placeholder="hmm..."
//         rows={2}
//         className="w-full text-base bg-transparent border-b-2 border-gray-600 focus:border-primary outline-none px-3 py-2 resize-none placeholder:text-base placeholder:text-gray-400 transition-all"
//       ></textarea>
//     </div>
//   </div>

//   <div>
//     You can reach me at{" "}
//     <div className="mt-2">
//       <input
//         type="email"
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//         placeholder="your email"
//         className="w-full  text-base  bg-transparent border-b-2 border-gray-600 focus:border-primary outline-none px-3 py-2 placeholder:text-base placeholder:text-gray-400 transition-all"
//       />
//     </div>
//   </div>
//    <div className="flex justify-center items-center">
//    <button
//     type="submit"
//     className="mt-10 w-200 bg-primary hover:bg-primary-foreground transition-all text-white text-lg px-8 py-3 rounded-xl shadow-md"
//   >
//     {sent ? "Sent" : "Send"}
//   </button>
//   </div>
// </form>

//       </div>
//     </main>
//   )
// }
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        {
          name: form.name,
          time: new Date().toLocaleString(),
          title: form.title,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_KEY || ""
      )
      .then(() => setSent(true));
  };

  return (
    <main className="min-h-screen w-full text-gray-200 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-24 font-mono ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28">
        {/* === LEFT SECTION === */}
        <div className="flex flex-col justify-center space-y-8 sm:space-y-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-gray-100 leading-tight">
            Let’s <span className="text-primary">collab</span> and build
            something epic.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg tracking-wide">
            Ping me on socials
          </p>

          <div className="flex justify-center md:justify-start space-x-6 sm:space-x-8 mt-4">
            <a
              href="https://github.com/ananya-dhiman"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/ananya-dhiman-260876282/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://x.com/DhimanAnan14116"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaXTwitter className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="mailto:ananyadhiman14116@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>

        {/* === RIGHT SECTION (FORM) === */}
        <form
          onSubmit={sendEmail}
          className="text-base sm:text-lg mt-10 md:mt-0 space-y-8 w-full"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-300 text-sm sm:text-base">
              My name is
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full text-sm sm:text-base bg-transparent border-b-2 border-gray-600 focus:border-primary outline-none px-2 py-2 placeholder:text-gray-400 transition-all"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block mb-2 text-gray-300 text-sm sm:text-base">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Project Title"
              className="w-full text-sm sm:text-base bg-transparent border-b-2 border-gray-600 focus:border-primary outline-none px-2 py-2 placeholder:text-gray-400 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-gray-300 text-sm sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="hmm..."
              rows={3}
              className="w-full text-sm sm:text-base bg-transparent border-b-2 border-gray-600 focus:border-primary outline-none px-2 py-2 resize-none placeholder:text-gray-400 transition-all"
            ></textarea>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-300 text-sm sm:text-base">
              You can reach me at
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full text-sm sm:text-base bg-transparent border-b-2 border-gray-600 focus:border-primary outline-none px-2 py-2 placeholder:text-gray-400 transition-all"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="mt-8 sm:mt-10 bg-primary hover:bg-primary-foreground transition-all text-white text-base sm:text-lg px-8 py-3 rounded-xl shadow-md"
            >
              {sent ? "Sent" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

