import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import toolImg from "../assets/tool1.jpg";
import showimg from "../assets/show.png";
import gradimg from "../assets/gradient2-bg.jpg";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
import contactkid from "../assets/contactkid.png";
import digibook from "../assets/digibook.png";
import act from "../assets/act.png";
import testpaper from "../assets/testpaper.png";
import gradient from "../assets/gradient-bg3.png";
import color from "../assets/color.webp";
import publisher from "../assets/publisher.png";
import school from "../assets/school.png";
import student from "../assets/student.png";
import kidsanimation from "../assets/kidsanimation.png";

const ELearningSolutions = () => {
  const [formData, setFormData] = useState({
    Yourname: "",
    email: "",
    Organization_School: "",
    Message_Requirements: "",
  });

  const { toast } = useToast();

  /**
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * @param {React.FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      inquiryType: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section
          className="relative md:py-40 py-28 min-h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${toolImg})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                E-Learning Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Empowering educators and students with innovative digital
                solutions for a brighter learning future.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* What is Digital Learning */}
      <section className="py-10 bg-[#E6F3FF]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <img src={showimg} alt="Digital Learning" className="w-3/4 mx-auto" />
          <div>
            <h2 className="text-4xl font-bold mb-6">E-Learning Solutions</h2>
            <p className="text-gray-600 mb-6">
              Our e-learning solutions are designed to be engaging,
              user-friendly, and fully tailored to each client’s requirements.
              At Nextgen Solutions, our experts craft interactive courses that
              align with your training goals and audience needs. We combine the
              right learning strategies with the latest e-learning technologies
              to deliver impactful content. With a spirit of innovation and
              exploration, we’ve built expertise across diverse industries,
              making us a trusted partner for end-to-end e-learning development.
            </p>
          </div>
        </div>
      </section>

      {/* The NextGen Edge Section */}
      <section
        className="py-20"
        style={{ backgroundImage: `url(${gradient})` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What we offer
          </h2>

          {/* Grid updated to 4 columns on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* E-Book */}
            <div
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ border: "1px solid hsl(0deg 0% 56.22%)" }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
                  <img
                    src={digibook}
                    alt="E-book icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Interactive E-books
              </h3>
              <p className="text-gray-600">
                Bring textbooks to life with engaging digital content,
                animations, and audio support for modern learning.
              </p>
            </div>

            {/* Interactivity */}
            <div
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ border: "1px solid hsl(0deg 0% 56.22%)" }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
                  <img
                    src={act}
                    alt="Activity icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Interactive Activities
              </h3>
              <p className="text-gray-600">
                Gamified activities, quizzes, and interactive modules that keep
                students engaged and motivated to learn.
              </p>
            </div>

            {/* Test Paper Generator */}
            <div
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ border: "1px solid hsl(0deg 0% 56.22%)" }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
                  <img
                    src={testpaper}
                    alt="Test Paper icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Test Paper Generator
              </h3>
              <p className="text-gray-600">
                Powerful AI-based tool for teachers to create custom test
                papers, saving time while improving assessment quality.
              </p>
            </div>

            {/* Animations */}
            <div
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ border: "1px solid hsl(0deg 0% 56.22%)" }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
                  <img
                    src={kidsanimation}
                    alt="Animation icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Topic Wise Animations
              </h3>
              <p className="text-gray-600">
                Create engaging animations to illustrate complex concepts,
                making learning more dynamic and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Benefits */}
      <section
        className="py-20  text-white"
        style={{ backgroundImage: `url(${color})`, backgroundSize: "cover" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Who It Benefits</h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Schools */}
            <div className="p-8 ">
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-indigo-600 rounded-xl">
                <img
                  src={school}
                  alt="Publisher icon"
                  className="w-12 h-12 text-white"
                />
              </div>
              <h3
                className="text-2xl font-semibold text-center mb-4"
                style={{ color: "yellow" }}
              >
                Schools
              </h3>
              <p className="text-gray-300 text-center">
                Provide interactive e-learning, reduce costs with digital
                resources, and monitor performance through tests to improve
                outcomes.
              </p>
            </div>

            {/* Publishers */}
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-purple-600 rounded-xl">
                <img
                  src={publisher}
                  alt="Publisher icon"
                  className="w-12 h-12 text-white"
                />
              </div>
              <h3
                className="text-2xl font-semibold text-center mb-4  "
                style={{ color: "yellow" }}
              >
                Publishers
              </h3>
              <p className="text-gray-300 text-center">
                Transform books into interactive digital editions, reach wider
                markets with e-distribution, and generate recurring revenue.
              </p>
            </div>

            {/* Students */}
            <div className="p-8 ">
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-green-600 rounded-xl">
                <img
                  src={student}
                  alt="Publisher icon"
                  className="w-12 h-12 text-white"
                />
              </div>
              <h3
                className="text-2xl font-semibold text-center mb-4"
                style={{ color: "yellow" }}
              >
                Students
              </h3>
              <p className="text-gray-300 text-center">
                Enjoy interactive content, gamified learning, self-paced
                resources, and personalized feedback for all age groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Demo */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title + Form */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Request a Demo
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will connect with you to
              schedule a demo of our Digital Learning Tool.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="Yourname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Yourname"
                    name="Yourname"
                    placeholder="Enter your name"
                    value={formData.Yourname}
                    onChange={handleChange}
                    required
                    className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="Organization_School"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Organization / School{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Organization_School"
                    name="Organization_School"
                    placeholder="Enter your organization"
                    value={formData.Organization_School}
                    onChange={handleChange}
                    required
                    className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="Message_Requirements"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message / Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="Message_Requirements"
                  name="Message_Requirements"
                  placeholder="Tell us more about your requirements..."
                  value={formData.Message_Requirements}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center items-center">
            <img
              src={contactkid}
              alt="Request Demo"
              className="w-3/4 lg:w-full max-w-md rounded-xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ELearningSolutions;
