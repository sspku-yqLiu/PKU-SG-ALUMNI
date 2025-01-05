import styles from "./Card.module.scss";

export const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;
