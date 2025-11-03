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
          message:
            "Message sent successfully! You should receive a confirmation email shortly. I'll get back to you within 24-48 hours.",
        });
      } catch (autoReplyError) {
        console.warn(
          "Auto-reply failed, but main email was sent:",
          autoReplyError
        );

        // Still show success since main email worked
        setSubmitStatus({
          success: true,
          message:
            "Message sent successfully! I'll get back to you within 24-48 hours. (Note: Confirmation email may be delayed)",
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

      errorMessage +=
        "Please try again later or contact me directly at naibo2002@gmail.com";

      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
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
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gray-50 dark:bg-gray-800/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-100/40 dark:bg-sky-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative w-full sm:w-[90%] lg:w-[80%] max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <motion.p
            variants={fadeUp}
            className="text-sky-600 dark:text-sky-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6"
          >
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </motion.p>
        </motion.div>

        {submitStatus.message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-8 p-6 rounded-2xl text-center ${
              submitStatus.success
                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800"
                : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
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
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={item} className="space-y-8">
            <motion.div
              variants={cardVariants}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect. I'll get back to you as soon
                as possible and you'll receive an automatic confirmation email.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:naibo2002@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      naibo2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+85587968850"
                      className="text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      +855 879 688 50
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Siem Reap, Cambodia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item}>
            <motion.div
              variants={cardVariants}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-gray-600 dark:text-white transition-all duration-300"
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
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-gray-600 dark:text-white transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-gray-600 dark:text-white transition-all duration-300"
                    disabled={isSubmitting}
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-gray-600 dark:text-white transition-all duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md disabled:opacity-70 text-base font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
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
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                  📧 You'll receive an automatic confirmation email after
                  submitting
                </p>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
