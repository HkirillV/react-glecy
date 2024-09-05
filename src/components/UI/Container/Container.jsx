import './Container.scss'

const Container = (props) => {
  const {
    className = 'container',
    children
  } = props;

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Container