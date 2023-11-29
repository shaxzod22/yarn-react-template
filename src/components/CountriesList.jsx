
import PropTypes from 'prop-types'
import './CountryList.css'


const CountriesList = (props) => {
 const {countries} = props
 
    
    return (
        <ul className="countries__list">
        {countries.map((country,index)=>(
            <li key={index} className="countries__item">
            <img src={country.flags.png} alt={country.name.official} className="country__img" />
            <h3 className="country__name">{country.name.common}</h3>
            </li>
            ))}
            </ul>
            )
        }

        CountriesList.propTypes={
            countries:PropTypes.array,
        }
        
        export default CountriesList
        