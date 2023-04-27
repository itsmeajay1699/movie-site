function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#014970",
        color: "white",
        borderRadius: "50%",
        outline: "none",
        border: "none",
        positiona: "absolute",
        top: "40%",
      }}
      onClick={onClick}
    />
  );
}

export default SampleNextArrow;
