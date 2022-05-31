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

const initData = [
  {
    id: 1,
    title: '1#小苍',
  },

  {
    id: 2,
    title: '2#少帮主',
  },

  {
    id: 3,
    title: '3#老党',
  },

  {
    id: 4,
    title: '4#囚徒',
  },

  {
    id: 5,
    title: '5#2009',
  },

  {
    id: 6,
    title: '6#桃子',
  },

  {
    id: 7,
    title: '7#鼠大王',
  },

  {
    id: 8,
    title: '8#李斯',
  },

  {
    id: 9,
    title: '9#沐沐',
  },

  {
    id: 10,
    title: '10#KS',
  },

  {
    id: 11,
    title: '11#JY',
  },

  {
    id: 12,
    title: '12#大宝',
  },
];

const App = () => {
  const [roles, setRoles] = useState({});

  const [data, setData] = useState({
    lanes: [
      {
        id: 'lane1',
        title: '不站边',
        editable: false,
        // label: '2/2',
        cards: initData,
      },

      {
        id: 'lane2',
        title: '我是预言家',
        cards: [],
      },

      {
        id: 'lane3',
        title: '我才是预言家',
        cards: [],
      },

      // {
      //   id: 'lane4',
      //   title: '我是女巫',
      //   cards: [],
      // },

      // {
      //   id: 'lane5',
      //   title: '我才是女巫',
      //   cards: [],
      // },
    ],
  });

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

    const currentCard = initData[cardId - 1];
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
        laneId,
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
        className={styles['smooth-dnd-draggable-wrapper']}
        data={data}
        eventBusHandle={setEventBus}
        // onCardDelete={() => {
        //   return false;
        // }}
        // editable
        canAddLanes
        // editLaneTitle
        hideCardDeleteIcon
        // onDataChange={handleDataChange}
        onCardClick={handleCardClick}
        // onCardUpdate={function noRefCheck(){}}
        // onLaneAdd={function noRefCheck(){}}
      />
    </div>
  );
};
export default App;
