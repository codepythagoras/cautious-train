import { useHistory } from "react-router-dom";

const FAQ = () => {
  const history = useHistory();
  history.push("/FAQ");
  return <div></div>;
};

export default FAQ;
