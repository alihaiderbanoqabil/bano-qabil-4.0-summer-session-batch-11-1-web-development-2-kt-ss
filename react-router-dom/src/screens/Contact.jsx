import { useSelector } from "react-redux";
const Contact = () => {
  const { users } = useSelector((state) => state.user);
  return (
    <div>
      Contact
      <pre>{JSON.stringify(users, null, 4)}</pre>
    </div>
  );
};

export default Contact;
