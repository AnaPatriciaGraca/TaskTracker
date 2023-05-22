//impt
import PropTypes from 'prop-types'


const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <button className='btn'>Add</button>
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
