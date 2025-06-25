"use client";
import profile from "../../../../public/Images/profile.jpeg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowUp,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle" | "success" | "error"
  // (useState < "idle") | "success" | ("error" > "idle");

  const handleInputChange = (e) => {
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
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sudipraut444@gmail.com",
      href: "mailto:sudipraut444@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "9817721568",
      href: "tel:9817721568",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hello@yourname.com",
      label: "Email",
      color: "hover:bg-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-purple-600 text-sm font-semibold tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={profile}
                    alt="Profile"
                    fill
                    className="rounded-full object-cover border-4 border-purple-100"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Sudip Raut
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  Front End Developer
                </p>
                <p className="text-gray-600">
                  Available for freelance & full-time opportunities
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">
                  Contact Information
                </h4>
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className="text-purple-600 group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="font-medium text-gray-800">{info.value}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 text-gray-600 rounded-lg hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Me a Message
              </h3>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">
                    Failed to send message. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-16">
          <Link
            href="#top"
            className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-purple-600 hover:text-purple-700 transition-all duration-300 transform hover:scale-110 border border-gray-100"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
