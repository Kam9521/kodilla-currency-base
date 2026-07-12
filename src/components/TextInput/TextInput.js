import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  return <input type="text" className={styles.input} {...props} />;
};

export default TextInput;
