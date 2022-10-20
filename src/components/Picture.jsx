const Picture = props => {
  const item = props.item;
  return (
    <li className="picture">
      <div className="imageContainer">
        <img src={item.src.large} alt={item.photographer} />
      </div>
      <p className="info">{item.photographer}</p>
    </li>
  );
};

export default Picture;
