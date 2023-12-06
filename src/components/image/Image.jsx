const Image = ({ src, alt }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
};

export default Image;
