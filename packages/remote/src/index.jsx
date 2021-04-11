import React from 'react';
import Card from './components/Card';
import Styles from './styles';
import toggleAnim from './toggleAnim';

const Main = () => (
  <>
    <Styles />
    <main>
      <Card title="cool" callbackFn={() => { toggleAnim('cool'); }} />
    </main>
  </>
);

export default Main;
