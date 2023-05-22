//impt
import PropTypes from 'prop-types'
import Button from './Button'

//rafce
const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} handleClick={onAdd} />
        </header>
    )
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    // title: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default Header
