import React, { useEffect, useState } from 'react';
import Board from 'react-trello';
import Icon, { nameMap } from './components/Icon';
import Guess from './components/Guess';
import { roleConstants } from './utils/roleConstants';
import styles from './index.less';

let eventBus = undefined;

const setEventBus = (handle) => {
  eventBus = handle;
};

const DEFAULT_DESCRIPTION = '好人--> \n狼人-->\n警徽流-->';

const initData = [
  {
    id: 1,
    title: '1#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 2,
    title: '2#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 3,
    title: '3#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 4,
    title: '4#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 5,
    title: '5#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 6,
    title: '6#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 7,
    title: '7#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 8,
    title: '8#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 9,
    title: '9#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 10,
    title: '10#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 11,
    title: '11#',
    description: DEFAULT_DESCRIPTION,
  },

  {
    id: 12,
    title: '12#',
    description: DEFAULT_DESCRIPTION,
  },
];

// const initData = [
//   {
//     id: 1,
//     title: '1#小苍',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 2,
//     title: '2#少帮主',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 3,
//     title: '3#老党',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 4,
//     title: '4#囚徒',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 5,
//     title: '5#2009',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 6,
//     title: '6#桃子',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 7,
//     title: '7#鼠大王',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 8,
//     title: '8#李斯',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 9,
//     title: '9#沐沐',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 10,
//     title: '10#KS',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 11,
//     title: '11#JY',
//     description: DEFAULT_DESCRIPTION,
//   },

//   {
//     id: 12,
//     title: '12#大宝',
//     description: DEFAULT_DESCRIPTION,
//   },
// ];

const App = () => {
  const [roles, setRoles] = useState({});

  const [data, setData] = useState({
    lanes: [
      {
        id: 'lane1',
        title: '不站边',
        cards: initData,
        // label : <Icon type="normal" />,
      },

      {
        id: 'lane6',
        title: '大概率是狼人',
        label: <Icon type="wolf" />,
        cards: [],
        style: {
          backgroundColor: 'pink',
        },
      },

      {
        id: 'lane2',
        title: '我是预言家-阵营A',
        label: <Icon type="eye" />,
        cards: [],
        style: {
          backgroundColor: '#eec',
        },
      },

      {
        id: 'lane3',
        title: '我才是预言家-阵营B',
        label: <Icon type="eye" />,
        cards: [],
        style: {
          backgroundColor: '#eec',
        },
      },

      // {
      //   id: 'lane4',
      //   title: '守卫?',
      //   cards: [],
      // },

      // {
      //   id: 'lane5',
      //   title: '白痴?',
      //   cards: [],
      // },
    ],
  });

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
        // label : <Icon type={roleName} />,
        // label: nameMap[roleName],
        description: currentCard.description || DEFAULT_DESCRIPTION,
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
        editable
        canAddLanes
        editLaneTitle
        hideCardDeleteIcon
        laneDraggable
        // onDataChange={handleDataChange}
        // onCardClick={handleCardClick}
        // onCardUpdate={function noRefCheck(){}}
        // onLaneAdd={function noRefCheck(){}}
      />
    </div>
  );
};
export default App;
