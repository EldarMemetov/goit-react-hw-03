import peopleContact from "./contact.module.css";
import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={peopleContact.listInfo}>
      <p className={peopleContact.containerSvg}>
        <HiUser size={16} />
        {name}
      </p>
      <p className={peopleContact.containerSvg}>
        <FaPhoneAlt size={14} />
        {number}
      </p>
      <button onClick={onDelete} className={peopleContact.buttonDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
