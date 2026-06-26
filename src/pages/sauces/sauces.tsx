import { useEffect } from "react";
// import cn from "classnames";
import styles from "./sauces.module.css";
import { RecipeRow } from "../../components/recipe-row";
import { sauces } from "../../helpers/data";

const Sauces = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles["page-title"]}>супы</div>
      <div className={styles.recipes}>
        {Object.keys(sauces).map((recipeName) => (
          <RecipeRow key={recipeName} name={recipeName} />
        ))}
      </div>
    </div>
  );
};

export default Sauces;
