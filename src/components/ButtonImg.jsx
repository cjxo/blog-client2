import PropTypes from "prop-types";
import styles from "../styles/component.module.css";

const ButtonImg =
  ({
    className,
    src,
    alt,
    width,
    height,
    ...rest
  }) => {
  return (
    <button
      className={`${styles.buttonImg} ${className}`}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </button>
  );
};

ButtonImg.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ButtonImg;
