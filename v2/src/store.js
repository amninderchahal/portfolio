import Vue from 'vue'
import Vuex from 'vuex';

import getJson from './services/get-json';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        resumeData: [],
        aboutData: {},
        projects: []
    },
    getters: {
        getProject(state){
            return (index) => state.projects[index]
        }
    },
    mutations: {
        setData(state, data){
            state.resumeData = data.resumeData;
            state.aboutData = data.aboutData;
            state.projects = data.projects;
        }
    },
    actions: {
        getStateData(context){
            getJson().then(
                axios.spread((resume, about, projects) => {
                  const data = {
                    resumeData: resume.data,
                    aboutData: about.data,
                    projects: projects.data
                  }
                  context.commit('setData', data)
                }))
        }
    }
});