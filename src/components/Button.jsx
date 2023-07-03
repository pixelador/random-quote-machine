import PropTypes from 'prop-types';

const Button = ({onClick, text, id}) => {
  return (
    <button type="button" onClick={onClick} id={id}>
      {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default Button