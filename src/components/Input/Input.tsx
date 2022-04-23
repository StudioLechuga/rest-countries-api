const Input = (props: IInput): JSX.Element => {
  return (
    <div className="inputStuffContainer">
      <button>
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={"Search your country"}
      />
      {props.value.length > 0 && (
        <button onClick={props.onClean} className="inputCleaner">
          x
        </button>
      )}
    </div>
  );
};

export default Input;
