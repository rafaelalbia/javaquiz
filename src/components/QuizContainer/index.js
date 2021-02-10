import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  top: 50%;
  -ms-transform: translateY(10%);
  transform: translateY(10%);
  @media screen and (min-width: 500px) {
    margin: auto 10%;
    padding: 15px;
  }
`;

export default QuizContainer;
