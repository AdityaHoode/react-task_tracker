import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
	const onClick = () => {
		console.log('click');
	}
	return (
		<div className="header">
			<h1>{props.title}</h1>
			<Button color="green" text="Hello" onClick={onClick}/>
		</div>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header
