import { FC } from "react";
import styles from "../../../styles/Category.module.css";

const CustomCheckBox: FC<any> = ({ name }) => {
  return (
    <div className={styles["form-group"]}>
      <input type="checkbox" name={name} id={name} className="peer" />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default CustomCheckBox;
