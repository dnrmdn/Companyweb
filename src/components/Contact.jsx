import { useState } from "react";
import { toast } from "react-toastify";


const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "585abbd7-ecb3-4808-be59-3cd239de61e4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };





  return (
      <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4">
        Contact <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
      </h1>
      <div className="flex flex-col items-center text-center gap-4">
        <p className="text-gray-500 max-w-lg text-sm mb-8">Ready to Make a Move? Let’s Build Your Future Together</p>
        <form onSubmit={onSubmit} action="">
            <div className="flex flex-shrink-0 justify-center gap-8">
                <div className="w-full md:w-1/2 text-left">Your Name 
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" name="Name" type="text" placeholder="Your name" required />
                </div>
                <div className="w-full md:w-1/2 text-left">Your Email 
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" name="Email" type="email" placeholder="Your email" required />
                </div>
            </div>
            <div className="my-6 text-left">
                Message
            </div>
            <textarea className="w-full border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none mb-2" name="Message" placeholder="Message" id=""></textarea>
            <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
                {result ? result: "Send Message"}
            </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
