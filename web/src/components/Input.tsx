import styles from "./Input.module.scss";

import classNames from "clsx";

export default function Input({
  label,
  value,
  className,
  onChange,
}: {
  label: string;
  value: string;
  className?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className={classNames(styles.formGroup, className)}>
      <input
        type="input"
        className={styles.formField}
        placeholder="Name"
        name="name"
        id="name"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor="name" className={styles.formLabel}>
        {label}
      </label>
    </div>
  );
}
