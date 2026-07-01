import {
  FaBook,
  FaStickyNote,
  FaStore,
  FaGraduationCap,
  FaTags,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaBook />,
    title: "Books",
    desc: "Engineering, Medical, Commerce & More",
    gradient: "linear-gradient(135deg, #6C4CF1, #a78bfa)",
    lightBg: "#f5f3ff",
    glow: "rgba(108, 76, 241, 0.22)",
    link: "/books",
  },
  {
    icon: <FaStickyNote />,
    title: "Notes",
    desc: "Handwritten & Digital Notes",
    gradient: "linear-gradient(135deg, #3b82f6, #93c5fd)",
    lightBg: "#eff6ff",
    glow: "rgba(59, 130, 246, 0.22)",
    link: "/notes",
  },
  {
    icon: <FaStore />,
    title: "Marketplace",
    desc: "Buy & Sell Study Material",
    gradient: "linear-gradient(135deg, #f59e0b, #fcd34d)",
    lightBg: "#fffbeb",
    glow: "rgba(245, 158, 11, 0.22)",
    link: "/marketplace",
  },
  {
    icon: <FaGraduationCap />,
    title: "Universities",
    desc: "Semester Wise Resources",
    gradient: "linear-gradient(135deg, #10b981, #6ee7b7)",
    lightBg: "#f0fdf4",
    glow: "rgba(16, 185, 129, 0.22)",
    link: "/marketplace",
  },
  {
    icon: <FaTags />,
    title: "Best Deals",
    desc: "Affordable Student Pricing",
    gradient: "linear-gradient(135deg, #ef4444, #fca5a5)",
    lightBg: "#fff1f2",
    glow: "rgba(239, 68, 68, 0.22)",
    link: "/marketplace",
  },
];

export default categories;