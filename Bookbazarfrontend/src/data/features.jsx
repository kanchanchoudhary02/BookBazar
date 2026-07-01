import {
  FaBookOpen,
  FaMoneyBillWave,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen />,
    title: "Huge Collection",
    desc: "Thousands of books and notes available for every stream and semester.",
    gradient: "linear-gradient(135deg, #6C4CF1, #a78bfa)",
    lightBg: "#f5f3ff",
    glow: "rgba(108, 76, 241, 0.2)",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Prices",
    desc: "Save money by buying second-hand study material at student-friendly prices.",
    gradient: "linear-gradient(135deg, #10b981, #6ee7b7)",
    lightBg: "#f0fdf4",
    glow: "rgba(16, 185, 129, 0.2)",
  },
  {
    icon: <FaUsers />,
    title: "Student Community",
    desc: "Buy and sell directly with fellow students — no middlemen involved.",
    gradient: "linear-gradient(135deg, #3b82f6, #93c5fd)",
    lightBg: "#eff6ff",
    glow: "rgba(59, 130, 246, 0.2)",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Platform",
    desc: "Safe, secure and reliable marketplace experience for every student.",
    gradient: "linear-gradient(135deg, #f59e0b, #fcd34d)",
    lightBg: "#fffbeb",
    glow: "rgba(245, 158, 11, 0.2)",
  },
];

export default features;