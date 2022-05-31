const Guess = (props) => {
  return (
    <div>
      {props.good && props.good.length > 0 && (
        <p>
          好人:
          <ul>
            {props.good.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </p>
      )}
      {props.bad && props.bad.length > 0 && (
        <p>
          坏人:
          <ul>
            {props.bad.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </p>
      )}
    </div>
  );
};

export default Guess;
