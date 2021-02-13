/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function SeeAnotherQuizes({ externalDB }) {
  return (
    <ThemeProvider theme={externalDB.theme}>
      <QuizScreen
        externalQuestions={externalDB.questions}
        externalBg={externalDB.bg}
      />
    </ThemeProvider>
    // {/* <pre style={{ color: 'black' }}>
    //   {JSON.stringify(externalDB.questions, null, 4)}
    // </pre> */}
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externalDB = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then(async (serverAnswer) => {
        if (serverAnswer.ok) {
          return serverAnswer.json();
        }

        throw new Error('Failure to get data');
      })
      .then((answerInvertedInfo) => answerInvertedInfo)
      // .catch((error) => {
      //   console.log(error);
      // });

    // console.log(externalDB);
    // console.log('Next Informations: ', context.query.id);

    return {
      props: {
        externalDB,
      },
    };
  } catch (error) {
    throw Error(error);
  }
}
