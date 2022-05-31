const map = {
  witch:
    'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995363190-6iWwbFHcfM2t.png',
  eye: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995351777-hdfppW38JYYk.png',
  shield:
    'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995340580-ynjTCz7rFJa3.png',
  gun: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995344803-7nZYr6MbKnH5.png',
  null: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995322936-WkAbQ5J4AT34.png',
  wolf: 'https://luo0412.oss-cn-hangzhou.aliyuncs.com/1653995359258-2zsDCryDRMxy.png',
};

const Icon = (props) => {
  if (!props.type) {
    return;
  }
  return (
    <img
      style={{
        width: '20px',
        height: '20px',
      }}
      src={map[props.type]}
    />
  );
};

export default Icon;
