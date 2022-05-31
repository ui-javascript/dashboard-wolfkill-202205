import React, { useEffect, useState } from 'react';
import Board from 'react-trello';
import Icon from './components/Icon';
import Guess from './components/Guess';
import { roleConstants } from './utils/roleConstants';

let eventBus = undefined;

const setEventBus = (handle) => {
  eventBus = handle;
};

const App = () => {
  const [roles, setRoles] = useState({
    1: 'gun',
  });

  const [data, setData] = useState([
    {
      id: '1',
      title: '不站队',
      editable: false,
      // label: '2/2',
      cards: [
        {
          id: '1',
          title: '苍姐',
          description: <Guess good={[]} bad={[]} />,
        },

        {
          id: '2',
          title: 'KS',
          description: <Guess good={[]} bad={[]} />,
        },
      ],
    },

    {
      id: '2',
      title: '我是预言家(A)',
      cards: [],
    },

    {
      id: '3',
      title: '我是预言家(B)',
      cards: [],
    },
  ]);

  const handleCardClick = (cardId, _, laneId) => {
    let roleName = roleConstants[0];
    if (roles[cardId]) {
      const idx = roleConstants.indexOf(roles[cardId]);
      roleName = roleConstants[(idx + 1) % roleConstants.length];
    }

    setRoles({
      ...roles,
      [cardId]: roleName,
    });

    const currentCard = data[laneId - 1].cards[cardId - 1];
    if (!currentCard) {
      return;
    }

    console.log('当前卡片');
    console.log(cardId);

    eventBus.publish({
      type: 'UPDATE_CARD',
      laneId,
      card: {
        ...currentCard,
        label: <Icon type={roleName} />,
        style: {
          backgroundColor: ['wolf'].includes(roleName)
            ? 'pink'
            : ['eye', 'witch', 'shield', 'gun'].includes(roleName)
            ? '#eec'
            : null,
        },
      },
    });
  };

  return (
    <div>
      <Board
        data={{ lanes: data }}
        eventBusHandle={setEventBus}
        // onCardDelete={() => {
        //   return false;
        // }}
        // onDataChange={handleDataChange}
        editable={false}
        onCardClick={handleCardClick}
        // onLaneAdd={function noRefCheck(){}}
      />
    </div>
  );
};
export default App;
