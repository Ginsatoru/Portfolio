import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaTimes,
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
  const [showModal, setShowModal] = useState(false);
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

    try {
      // Initialize EmailJS with your Public Key
      emailjs.init("AxgTc5NzZpQrwYhjQ");

      // Send the main contact email
      console.log("Sending main email...");
      const mainEmailResult = await emailjs.send(
        "service_eit1i65",
        "template_rtuwrxj",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "New Contact Form Message",
          message: formData.message,
          to_name: "Bo Nai",
          reply_to: formData.email,
        }
      );

      console.log("Main email sent successfully:", mainEmailResult);

      // Try to send auto-reply email to the user
      try {
        console.log("Sending auto-reply email...");
        const autoReplyResult = await emailjs.send(
          "service_eit1i65",
          "template_n2vnbjn",
          {
            to_name: formData.name,
            to_email: formData.email,
            title: formData.subject || "General Inquiry",
            message: formData.message,
            name: "Bo Nai",
            website_url: "https://bo-nai.netlify.app",
            linkedin_url: "https://www.linkedin.com/in/bo-nai-601296209",
            portfolio_url: "https://bo-nai.netlify.app",
            email: "naibo2002@gmail.com",
            location: "Siem Reap, Cambodia",
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

        setSubmitStatus({
          success: true,
          message:
            "Message sent successfully! I'll get back to you within 24-48 hours. (Note: Confirmation email may be delayed)",
        });
      }

      // Clear form and show modal
      setFormData({ name: "", email: "", subject: "", message: "" });
      setShowModal(true);
    } catch (error) {
      console.error("Failed to send main email:", error);

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
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
      className="relative py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800/50 overflow-hidden"
    >
      {/* Background Elements - Hidden on very small screens */}
      <div className="hidden sm:block absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-sky-100/40 dark:bg-sky-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Success/Error Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 mx-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1"
                aria-label="Close modal"
              >
                <FaTimes className="text-lg sm:text-xl" />
              </button>

              {/* Icon with Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-4 sm:mb-6"
              >
                {submitStatus.success ? (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center"
                  >
                    <FaCheckCircle className="text-4xl sm:text-5xl text-sky-600 dark:text-sky-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center"
                  >
                    <FaTimesCircle className="text-4xl sm:text-5xl text-red-600 dark:text-red-400" />
                  </motion.div>
                )}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4"
              >
                {submitStatus.success ? "Message Sent!" : "Oops!"}
              </motion.h3>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              >
                {submitStatus.message}
              </motion.p>

              {/* Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={closeModal}
                className={`w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  submitStatus.success
                    ? "bg-sky-600 hover:bg-sky-700 text-white"
                    : "bg-red-600 hover:bg-red-700 text-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitStatus.success ? "Great!" : "Try Again"}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full sm:w-[90%] lg:w-[80%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <motion.p
            variants={fadeUp}
            className="text-sky-600 dark:text-sky-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 sm:mb-6 px-4"
          >
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={item} className="space-y-6 sm:space-y-8">
            <motion.div
              variants={cardVariants}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Contact Information
              </h3>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect. I'll get back to you as soon
                as possible and you'll receive an automatic confirmation email.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <FaEnvelope className="text-base sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:naibo2002@gmail.com"
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors break-all"
                    >
                      naibo2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <FaPhone className="text-base sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+85587968850"
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      +855 879 688 50
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <FaMapMarkerAlt className="text-base sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
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
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-gray-600 dark:text-white transition-all duration-300"
                    required
                    disabled={isSubmitting}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-gray-600 dark:text-white transition-all duration-300"
                    required
                    disabled={isSubmitting}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-gray-600 dark:text-white transition-all duration-300"
                    disabled={isSubmitting}
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 dark:bg-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white dark:focus:bg-gray-600 dark:text-white transition-all duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-sky-600 text-white rounded-lg sm:rounded-xl hover:bg-sky-700 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-sm hover:shadow-md disabled:opacity-70 text-sm sm:text-base font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
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
                      <span className="text-sm sm:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-base sm:text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center mt-3 sm:mt-4 leading-relaxed px-2">
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