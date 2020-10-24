import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
})