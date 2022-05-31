import React, { useEffect, useState } from 'react';
import Board from 'react-trello';
import Icon from './components/Icon';
import Guess from './components/Guess';
import { roleConstants } from './utils/roleConstants';
import styles from './index.less';

let eventBus = undefined;

const setEventBus = (handle) => {
  eventBus = handle;
};

const App = () => {
  const [roles, setRoles] = useState({});

  const [data, setData] = useState([
    {
      id: 1,
      title: '不站队',
      editable: false,
      // label: '2/2',
      cards: [
        {
          id: 1,
          title: '小苍',
        },

        {
          id: 2,
          title: '少帮主',
        },

        {
          id: 3,
          title: '老党',
        },

        {
          id: 4,
          title: '囚徒',
        },

        {
          id: 5,
          title: '2009',
        },

        {
          id: 6,
          title: '桃子',
        },

        {
          id: 7,
          title: '鼠大王',
        },

        {
          id: 8,
          title: '李斯',
        },

        {
          id: 9,
          title: '沐沐',
        },

        {
          id: 10,
          title: 'KS',
        },

        {
          id: 11,
          title: 'JY',
        },

        {
          id: 12,
          title: '大宝',
        },
      ],
    },

    {
      id: 2,
      title: '我是预言家(A)',
      cards: [],
    },

    {
      id: 3,
      title: '我是预言家(B)',
      cards: [],
    },

    {
      id: 4,
      title: '我是预言家(C)',
      cards: [],
    },
  ]);

  const handleCardClick = (cardId, _, laneId) => {
    let roleName = roleConstants[0];
    if (roles[cardId]) {
      const idx = roleConstants.indexOf(roles[cardId]);
      debugger;
      roleName = roleConstants[(idx + 1) % roleConstants.length];
    }

    setRoles({
      ...roles,
      [cardId]: roleName,
    });

    const currentCard = data[0].cards[cardId - 1];
    if (!currentCard) {
      return;
    }

    console.log('当前卡片');
    console.log(cardId);

    eventBus.publish({
      type: 'UPDATE_CARD',
      laneId,
      // laneId: 0,
      card: {
        ...currentCard,
        label: <Icon type={roleName} />,
        description: <Guess good={[]} bad={[]} />,
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
        className={styles['smooth-dnd-draggable-wrapper']}
        data={{ lanes: data }}
        eventBusHandle={setEventBus}
        // onCardDelete={() => {
        //   return false;
        // }}
        // onDataChange={handleDataChange}
        onCardClick={handleCardClick}
        // onLaneAdd={function noRefCheck(){}}
      />
    </div>
  );
};
export default App;
