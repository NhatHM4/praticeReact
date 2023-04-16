const Title = (props) => {
  const myTilte = props.title.split(" ");
  return (
    <div className="section-title">
      <h2>
        {myTilte[0]} <span>{myTilte[1]} </span>
      </h2>
    </div>
  );
};

export default Title;
