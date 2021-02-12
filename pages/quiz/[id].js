/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function SeeAnotherQuizes() {
  return (
    <div>
      Teste
    </div>
  );
}

export async function getServerSIdeProps(context) {
  console.log('Next Informations: ', context);
  return {
    props: {},
  };
}
