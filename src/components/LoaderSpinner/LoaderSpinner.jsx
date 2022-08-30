import { Container } from "./styled";
import { FadeLoader } from "react-spinners";
const LoaderSpinner = () => {
  return (
    <Container>
      <FadeLoader color="#717171" />
    </Container>
  );
};

export default LoaderSpinner;
