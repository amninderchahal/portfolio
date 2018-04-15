import axios from 'axios';

export default function(){
    return axios.all([
        axios.get('/static/json/resume.json'), 
        axios.get('/static/json/about.json'),
        axios.get('/static/json/projects.json')
    ])
}
