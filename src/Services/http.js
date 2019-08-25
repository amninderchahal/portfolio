import axios from 'axios';

export default {
    getResumeData: () => axios.get('/assets/json/resume.json')
}