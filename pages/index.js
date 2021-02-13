/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>JavaQuiz</title>
        </Head>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>JavaQuiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (changeEvent) {
              changeEvent.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                onChange={(changeEvent) => setName(changeEvent.target.value)}
                placeholder="Type your name"
                name="userName"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Play ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>See another Quizes</h1>

            <ul>
              {db.external.map((externalLink) => {
                const [projectName, githubUser] = externalLink.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.');

                return (
                  <li key={externalLink}>
                    <Widget.Topic href={`/quiz/${projectName}___${githubUser}`}>
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rafaelalbia/javaquiz" />
    </QuizBackground>
  );
}
