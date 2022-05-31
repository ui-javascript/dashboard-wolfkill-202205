import React, { useState } from 'react';
import Board from 'react-trello';
import Icon from './components/Icon';
import Guess from './components/Guess';

const App = () => {
  const [role, setRole] = useState({
    1: 'gun',
  });

  const [data, setData] = useState({
    lanes: [
      {
        id: 'lane1',
        title: '不站队',
        // label: '2/2',
        cards: [
          {
            id: '1',
            title: '苍姐',
            editable: false,
            description: <Guess good={[]} bad={[]} />,
            style: {
              backgroundColor: '#eec',
            },
            label: <Icon type={role[1]} />,
          },

          {
            id: '10',
            title: 'KS',
            editable: false,
            description: <Guess good={[]} bad={[]} />,
            label: <Icon type={role[2]} />,
          },
        ],
      },

      {
        id: 'lane2',
        title: '我是预言家(A)',
        // label: '0/0',
        cards: [],
      },

      {
        id: 'lane3',
        title: '我是预言家(B)',
        // label: '0/0',
        cards: [],
      },
    ],
  });

  const handleClick = (item) => {
    console.log(item);
    // setData(item)
  };

  return (
    <div>
      <Board data={data} onClick={handleClick} />
    </div>
  );
};
export default App;
