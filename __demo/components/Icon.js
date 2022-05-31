const imgMap = {
  witch:
    'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995363190-6iWwbFHcfM2t.png',
  eye: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995351777-hdfppW38JYYk.png',
  shield:
    'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995340580-ynjTCz7rFJa3.png',
  gun: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995344803-7nZYr6MbKnH5.png',
  normal:
    'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995322936-WkAbQ5J4AT34.png',
  wolf: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995359258-2zsDCryDRMxy.png',
};

const nameMap = {
  witch: '女巫',
  eye: '预言家',
  shield: '白痴',
  gun: '猎人',
  normal: '村民',
  wolf: '狼人',
};

const Icon = (props) => {
  if (!props.type) {
    return '';
  }

  // return nameMap[props.type]
  return (
    <>
      <img
        style={{
          width: 20,
          height: 20,
        }}
        src={imgMap[props.type]}
      />
      <span style={{ marginLeft: 2 }}>{nameMap[props.type]}</span>
    </>
  );
};

export default Icon;
