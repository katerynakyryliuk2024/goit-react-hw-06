import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.datas);
  return (
    <ul className={css.list}>
      {contacts.map((el) => (
        <li className={css.contact} key={el.id}>
          <Contact contact={el} />
        </li>
      ))}
    </ul>
  );
}
