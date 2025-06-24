import classes from "./Button.module.css";

export default function Button({ children, className, ...props }) {
  return (
    <button className={`${classes.button} ${className}`} {...props}>
      {children}
    </button>
  );
}
