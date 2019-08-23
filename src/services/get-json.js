import axios from 'axios';

export default function(){
    return axios.all([
        axios.get('/assets/json/resume.json'), 
        axios.get('/assets/json/about.json'),
        axios.get('/assets/json/projects.json')
    ])
}
