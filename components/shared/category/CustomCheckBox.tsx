import { FC } from "react";
import styles from "../../../styles/Category.module.css";

const CustomCheckBox: FC<any> = ({ name }) => {
  return (
    <div className={styles["form-group"]}>
      <input type="checkbox" name={name} id={name} className="hidden m-0" />
      <label htmlFor={name} className="!col-span-7">
        <span className="box-decoration-clone w-full">{name}</span>
      </label>
    </div>
  );
};

export default CustomCheckBox;
