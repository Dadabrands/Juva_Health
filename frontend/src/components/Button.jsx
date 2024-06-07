

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({ styles }) => (
  <Link to="/signup" className={`flex items-center py-4 px-6 font-inter font-medium text-[18px] text-white bg-primary rounded-[10px] outline-none ${styles}`}>
    GET STARTED <FaArrowRight className={`ml-2`} />
  </Link>
);

export default Button;
