import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-orange-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              যোগাযোগ করুন
            </h2>
           
            <p className="text-md text-gray-600 mb-2">
              📍 ঠিকানা: হাউস # ১৩০, রোড # ০৫, মোহাম্মাদি হাউজিং সোসাইটি,
              মোহাম্মদপুর (শিয়া মসজিদের নিকটে)
            </p>
            <p className="text-md text-gray-600 mb-2">
              📞 ফোন: +880 1XXXXXXXXX
            </p>
            <p className="text-md text-gray-600 mb-6">
              ✉ ইমেইল: contact@mkhanassociates.com
            </p>

            {/* সোশ্যাল মিডিয়া */}
            <div className="flex space-x-6 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                  alt="Instagram"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mt-16 mb-10 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-orange-800 mb-6">
        Contact Us
          </h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-md focus:ring focus:ring-blue-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <textarea
              placeholder="Type Your Message"
              className="w-full mt-6 p-4 border rounded-md focus:ring focus:ring-blue-300"
              rows="4"
            />
            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-orange-800 text-white rounded-md hover:bg-green-600 transition"
            >
       Send 
            </button>
          </form>
        </div>
          </div>
        </div>

  
       
      </div>

      <div className="mt-12 rounded-lg border-blue-400 border-2 overflow-hidden shadow-lg">
        <iframe
          title="M. Khan & Associates Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.869602637519!2d90.35924537480413!3d23.752918188586107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf514d8be2db%3A0x6b04e8bfc6c2d79f!2sShia%20Mosque%2C%20Mohammadi%20Housing%20Society%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715511500000!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
