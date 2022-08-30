import { Container, ErrorDisplay, ErrorIcon } from "./styled";

const ErrorHandler = () => {
  return (
    <Container>
      <ErrorDisplay>
        <p>
          Something went wrong, try again letter
          <ErrorIcon>priority_high</ErrorIcon>
        </p>
      </ErrorDisplay>
    </Container>
  );
};

export default ErrorHandler;
