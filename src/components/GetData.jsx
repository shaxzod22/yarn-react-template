import axios from 'axios'
import PropTypes from 'prop-types'
const GetData =async (props) => {
    const {url} = props
 try{
    const res = await axios(url)
            return
 }

}
GetData.propTypes={
url:PropTypes.string,
}

export default GetData
