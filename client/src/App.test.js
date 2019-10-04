import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import PlayerCard from './components/PlayerCard';
import * as rtl from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the navbar button', async ()=>{
  const navRender = rtl.render(
    <Navbar />
  );
  console.log(navRender.debug());
})


// test('loads cards', async () => {
//   const cardRender = await rtl.render(
//         <PlayerCard />
//   );
// })


// it('renders the player cards', ()=>{
//   const cardRender = await rtl.render(
//     <PlayerCard />
//   );
//   // console.log(cardRender.debug());
// })