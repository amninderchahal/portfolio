<template>
<div class="section page-about">
    <div class="container-fluid">
        <button id="refreshSkills" class="btn btn-primary" type="button" @click="toggle($event)"><span class="glyphicon glyphicon-pause"></span></button>
        <div class="bg-container"></div>
        <button id="scroll-down-btn" type="button" > 
            <span class="glyphicon glyphicon-chevron-down"></span>
        </button>
        <div class="about-page-content">
            <div class="row about-heading-wrapper heading-wrapper">
                <div class="name-heading-wrapper">
                    <h1 class="title heading-1">Amninder Chahal</h1>
                    <p class="subtitle">Building pixel perfect websites and exceptional user experience</p>
                </div>
                <div class="resume-links">
                        <router-link to="/about/resume">
                            <span class="glyphicon glyphicon-file"></span>
                            Resume
                        </router-link>
                        <a href="https://github.com/amninderchahal" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.6 0 8 0 11.5 2.3 14.5 5.5 15.6 5.9 15.7 6 15.4 6 15.2 6 15 6 14.4 6 13.7 4 14.1 3.5 13.2 3.3 12.8 3.2 12.6 2.8 11.8 2.5 11.7 2.2 11.5 1.8 11.1 2.5 11.1 3.1 11.1 3.6 11.7 3.7 11.9 4.4 13.2 5.6 12.8 6.1 12.6 6.1 12.1 6.3 11.7 6.6 11.5 4.8 11.3 2.9 10.6 2.9 7.6 2.9 6.7 3.2 6 3.7 5.4 3.7 5.2 3.4 4.4 3.8 3.3 3.8 3.3 4.5 3.1 6 4.1 6.7 4 7.3 3.9 8 3.9 8.7 3.9 9.4 4 10 4.1 11.6 3.1 12.2 3.3 12.2 3.3 12.7 4.4 12.4 5.2 12.3 5.4 12.8 6 13.1 6.7 13.1 7.6 13.1 10.7 11.3 11.3 9.5 11.5 9.8 11.8 10 12.3 10 13 10 14.1 10 14.9 10 15.2 10 15.4 10.2 15.7 10.6 15.6 13.7 14.5 16 11.5 16 8 16 3.6 12.4 0 8 0L8 0Z"/></svg>
                            Github
                        </a>
                </div>
            </div>
            <div class="content-wrapper">
                <div class="about-section skills-section col-md-9 col-centered">
                    <div class="skills-text">
                        <p v-if="skillSummary">{{skillSummary}}</p>
                    </div>
                    <div class="skills-wrapper" v-for="(section, index) in mySkills" :key="index">
                        <p class="heading-4 skills-header">{{section.title}}</p>
                        <div class="skill" v-for="(skill, index) in section.skills" :key="index">
                            <img class="skill-img" :src="skill.img">
                            <p class="title skill-title">{{skill.title}}</p>
                        </div>
                    </div>
                </div>
                <div class="learn-more">
                    <p>If you'd like to find out more about my skills and my work process, feel free to <router-link to="/contact">contact me</router-link>.</p>
                    <div class="learn-more-links">
                        <div class="link-wrapper">
                            <div class="link">
                                <a href="https://github.com/amninderchahal" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.6 0 8 0 11.5 2.3 14.5 5.5 15.6 5.9 15.7 6 15.4 6 15.2 6 15 6 14.4 6 13.7 4 14.1 3.5 13.2 3.3 12.8 3.2 12.6 2.8 11.8 2.5 11.7 2.2 11.5 1.8 11.1 2.5 11.1 3.1 11.1 3.6 11.7 3.7 11.9 4.4 13.2 5.6 12.8 6.1 12.6 6.1 12.1 6.3 11.7 6.6 11.5 4.8 11.3 2.9 10.6 2.9 7.6 2.9 6.7 3.2 6 3.7 5.4 3.7 5.2 3.4 4.4 3.8 3.3 3.8 3.3 4.5 3.1 6 4.1 6.7 4 7.3 3.9 8 3.9 8.7 3.9 9.4 4 10 4.1 11.6 3.1 12.2 3.3 12.2 3.3 12.7 4.4 12.4 5.2 12.3 5.4 12.8 6 13.1 6.7 13.1 7.6 13.1 10.7 11.3 11.3 9.5 11.5 9.8 11.8 10 12.3 10 13 10 14.1 10 14.9 10 15.2 10 15.4 10.2 15.7 10.6 15.6 13.7 14.5 16 11.5 16 8 16 3.6 12.4 0 8 0L8 0Z"/></svg>
                                </a>
                            </div>
                            <div class="link">
                                <a href="https://www.linkedin.com/in/amninderchahal/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76"><path class="st0" d="M68.3 1H7.7C4 1 1 4 1 7.7v60.6C1 72 4 75 7.7 75h60.6c3.7 0 6.7-3 6.7-6.7V7.7C75 4 72 1 68.3 1zM23.9 64.9c0 1.1-0.9 1.9-1.9 1.9h-8.3c-1.1 0-1.9-0.9-1.9-1.9V30.1c0-1.1 0.9-1.9 1.9-1.9H22c1.1 0 1.9 0.9 1.9 1.9V64.9zM17.8 24.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9S22.2 24.9 17.8 24.9zM67.2 65.1c0 1-0.8 1.8-1.8 1.8h-8.9c-1 0-1.8-0.8-1.8-1.8V48.7c0-2.4 0.7-10.7-6.4-10.7 -5.5 0-6.6 5.6-6.8 8.2v18.8c0 1-0.8 1.8-1.8 1.8h-8.6c-1 0-1.8-0.8-1.8-1.8V30c0-1 0.8-1.8 1.8-1.8h8.6c1 0 1.8 0.8 1.8 1.8v3c2-3.1 5.1-5.4 11.5-5.4 14.2 0 14.2 13.3 14.2 20.6L67.2 65.1 67.2 65.1z"/></svg>
                                </a>
                            </div>
                            <div class="link">
                                <a href="https://www.facebook.com/Chahal.Amninder" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M990 500c0-270.6-219.4-490-490-490C229.4 10 10 229.4 10 500c0 270.6 219.4 490 490 490C770.6 990 990 770.6 990 500zM368.4 500v-93.8h57.5v-56.7c0-76.5 22.9-131.6 106.6-131.6h99.6v93.5H562c-35.1 0-43.1 23.3-43.1 47.8v47h108.1L612.2 500h-93.3v282.8h-93V500H368.4z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import  { mapState } from 'vuex';
// import BackgroundSkillsModule from '../../assets/js/background-skills';
export default {
  name: 'About',
  computed: mapState({
    intro: state => state.aboutData.intro,
    mySkills: state => state.aboutData.mySkills,
    skillSummary: state => state.aboutData.skillSummary
  }),
  methods: {
    toggle(){
        console.log('Toggle called');
    }
  }
}
</script>
