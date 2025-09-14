import { useSelector } from "react-redux";

const About = () => {
  const { users } = useSelector((state) => state.user);
  return (
    <div>
      About
      <pre>{JSON.stringify(users, null, 4)}</pre>
    </div>
  );
};

export default About;
