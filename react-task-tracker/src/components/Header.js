//impt
import PropTypes from 'prop-types'
import Button from './Button'

//rafce
const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' handleClick={onClick} />
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
