import classNames from "classnames";
import "./Container.scss";

const Container = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <div className={classNames(className, "container")}>
      {children}
    </div>
  )
}

export default Container;