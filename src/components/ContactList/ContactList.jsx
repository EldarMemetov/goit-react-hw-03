import Contact from "../Contact/Contact";
import contactList from "./ContactList.module.css";
const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ul className={contactList.listUl}>
      {items.map((item) => (
        <Contact
          key={item.id}
          {...item}
          onDelete={() => onDeleteContact(item.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
