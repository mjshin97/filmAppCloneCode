import propTypes from "prop-types";
import style from "./Button.module.css";

function Button({ text }) {
    return <button className={style.title}>{text}</button>
/*
    return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
      }}
    >
      {text}
    </button>
  );
*/
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;
