import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      // Initialize EmailJS
      emailjs.init("AxgTc5NzZpQrwYhjQ");

      // Send the main contact email to you first
      console.log("Sending main email...");
      const mainEmailResult = await emailjs.send(
        "service_uinfooc",
        "template_0tayry7",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "New Contact Form Message",
          message: formData.message,
          to_name: "Bo Nai", // Your name
          reply_to: formData.email,
        }
      );

      console.log("Main email sent successfully:", mainEmailResult);

      // Try to send auto-reply email to the user
      try {
        console.log("Sending auto-reply email...");
        const autoReplyResult = await emailjs.send(
          "service_uinfooc", // Same service ID
          "template_mterprg", // Your auto-reply template ID
          {
            to_name: formData.name,
            to_email: formData.email,
            title: formData.subject || "General Inquiry", // Changed from 'subject' to 'title'
            message: formData.message, // Changed from 'user_message' to 'message'
            name: "Naibo", // Your name for the template
            website_url: "https://naibo-portfolio.com", // Replace with your actual URL
            linkedin_url: "https://linkedin.com/in/naibo", // Replace with your LinkedIn
            portfolio_url: "https://naibo-portfolio.com", // Replace with your portfolio URL
            email: "naibo2002@gmail.com", // Your email
            location: "Siem Reap, Cambodia", // Your location
          }
        );

        console.log("Auto-reply sent successfully:", autoReplyResult);

        setSubmitStatus({
          success: true,
          message: "Message sent successfully! You should receive a confirmation email shortly. I'll get back to you within 24-48 hours.",
        });

      } catch (autoReplyError) {
        console.warn("Auto-reply failed, but main email was sent:", autoReplyError);
        
        // Still show success since main email worked
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you within 24-48 hours. (Note: Confirmation email may be delayed)",
        });
      }

      // Clear form only if main email was successful
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error("Failed to send main email:", error);
      
      // More detailed error message
      let errorMessage = "Failed to send message. ";
      
      if (error.text) {
        errorMessage += `Error: ${error.text}. `;
      } else if (error.message) {
        errorMessage += `Error: ${error.message}. `;
      }
      
      errorMessage += "Please try again later or contact me directly at naibo2002@gmail.com";

      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="section bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 pb-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Get In Touch
      </motion.h2>

      {submitStatus.message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-8 p-4 rounded-lg text-center ${
            submitStatus.success
              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
              : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Contact Info */}
        <motion.div variants={item}>
          <motion.h3
            className="text-xl font-semibold mb-4"
            whileHover={{ x: 5 }}
          >
            Contact Information
          </motion.h3>

          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
          >
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect. I'll get back to you as soon as
            possible and you'll receive an automatic confirmation email.
          </motion.p>

          <motion.div className="space-y-4" variants={container}>
            <motion.div
              className="flex items-start gap-4"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="mt-1 text-blue-500 dark:text-blue-400">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:naibo2002@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  naibo2002@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="mt-1 text-blue-500 dark:text-blue-400">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+85587968850"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  +855 879 688 50
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              variants={item}
              whileHover={{ x: 5 }}
            >
              <div className="mt-1 text-blue-5000 dark:text-blue-400">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Siem Reap, Cambodia
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={item}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                required
                disabled={isSubmitting}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                required
                disabled={isSubmitting}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                disabled={isSubmitting}
                placeholder="Project inquiry, collaboration, etc."
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                required
                disabled={isSubmitting}
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
              📧 You'll receive an automatic confirmation email after submitting
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;