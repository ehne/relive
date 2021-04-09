import React from 'react';
import Card from './components/Card';

const Main = () => (
  <main>
    <Card title="cool" callbackFn={()=>{console.log('hello')}} />
  </main>
);

export default Main;
