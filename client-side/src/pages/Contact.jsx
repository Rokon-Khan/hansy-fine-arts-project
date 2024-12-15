import hansContact from "../assets/contacthans.jpg";

const Contact = () => {
  return (
    <div className="contact-page bg-gray-50 min-h-screen flex items-center justify-center px-4 md:px-10 py-10">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section - Image */}
        <div className="md:w-1/2  flex items-center justify-center p-4">
          <img
            src={hansContact}
            alt="Contact Illustration"
            className="w-3/4 "
          />
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 p-8">
          <h1 className="lg:text-5xl text-3xl font-semibold font-yesterYear text-blue-500 mb-6">
            Contact Me
          </h1>
          <p className="text-gray-600 mb-8">
            Do you have any questions about my works, or would you like to learn
            more about my creative process? I'd love to hear from you. Whether
            it's to discuss a specific piece, possible collaborations, or any
            other inquiries, please feel free to reach out. I'm here to help you
            discover the art of flying and creating.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name (required):
              </label>
              <input
                type="text"
                id="name"
                placeholder="So I can address my response personally."
                className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email (required):
              </label>
              <input
                type="email"
                id="email"
                placeholder="To respond to your inquiry."
                className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone (optional):
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="In case you prefer direct contact."
                className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject (optional):
              </label>
              <select
                id="subject"
                className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Inquiry about a work</option>
                <option>Collaboration proposal</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message (required):
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="A large text box where you can write your inquiry."
                className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md shadow-md transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
