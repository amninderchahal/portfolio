<template>
<div id="project-page" class="section project-page">
    <div class="project-div" v-if="project">
        <div class="project-close-icon">
            <router-link class="close-icon-wrapper"  to="/work">
                <div class="lr"></div>
                <div class="rl"></div>
            </router-link>
        </div>
        <h3 class="title heading-1">{{project.title}}</h3>
        <p class="project-labels">
            <span v-for="(label, index) in project.labels" :key="index" class="label label-primary">{{label}}</span>
        </p>
        <div class="project-wrapper">
            <div class="project-section">
                <div class="project-description">
                    <p>{{project.description}}</p>
                    <ul v-if="project.features">
                        <li v-for="(feature, index) in project.features" :key="index">{{feature}}</li>
                    </ul>
                </div>
                <div v-if="project.github || project.website" class="project-links">
                    <a class="project-github" v-if="project.github" :href="project.github" target="_blank">
                        <i class="project-github-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.6 0 8 0 11.5 2.3 14.5 5.5 15.6 5.9 15.7 6 15.4 6 15.2 6 15 6 14.4 6 13.7 4 14.1 3.5 13.2 3.3 12.8 3.2 12.6 2.8 11.8 2.5 11.7 2.2 11.5 1.8 11.1 2.5 11.1 3.1 11.1 3.6 11.7 3.7 11.9 4.4 13.2 5.6 12.8 6.1 12.6 6.1 12.1 6.3 11.7 6.6 11.5 4.8 11.3 2.9 10.6 2.9 7.6 2.9 6.7 3.2 6 3.7 5.4 3.7 5.2 3.4 4.4 3.8 3.3 3.8 3.3 4.5 3.1 6 4.1 6.7 4 7.3 3.9 8 3.9 8.7 3.9 9.4 4 10 4.1 11.6 3.1 12.2 3.3 12.2 3.3 12.7 4.4 12.4 5.2 12.3 5.4 12.8 6 13.1 6.7 13.1 7.6 13.1 10.7 11.3 11.3 9.5 11.5 9.8 11.8 10 12.3 10 13 10 14.1 10 14.9 10 15.2 10 15.4 10.2 15.7 10.6 15.6 13.7 14.5 16 11.5 16 8 16 3.6 12.4 0 8 0L8 0Z"/></svg>
                        </i>
                        <p class="title heading-3">github</p>
                    </a>
                    <a class="project-website" v-if="project.website" :href="project.website" target="_blank">Visit Website</a>
                </div>
            </div>
            <div class="image-wrapper">
                <img class="project-page-images" id="img-index+1" v-for="(img, index) in project.img" :key="index" :src="img" alt="Image">
            </div>
        </div>
        <a class="btn btn-success" @click="topBtnClick" href="#">
            <span class="glyphicon glyphicon-chevron-up"></span> Top
        </a>
    </div>
</div>
</template>

<script>
export default {
  name: "Project",
  computed: {
    project() {
      const index = this.$route.params.index;
      return this.$store.getters.getProject(index - 1);
    }
  },
  methods: {
    topBtnClick(event) {
        if (event) {
            event.preventDefault();
        }
        let currentScrollTop;
        window.clearInterval(this.interval);
        this.interval = setInterval(() => {
            currentScrollTop = window.pageYOffset || window.scrollTop;
            if(currentScrollTop > 20){
                window.scrollBy(0, -12);
            } else {
                window.clearInterval(this.interval);
            }
        }, 1);
    }
  },
  mounted() {
    let scrollTop;
    const target = 200,
      images = document.getElementsByClassName("project-page-images"),
      windowWidth = window.innerWidth;
    const setWidthToEachImg = function(width) {
      Array.prototype.forEach.call(images, img => {
        img.style.width = width;
      });
    };

    if (windowWidth < 992) {
      return;
    }
    window.onscroll = () => {
      scrollTop = window.pageYOffset || window.scrollTop;
      if (scrollTop > target) {
        setWidthToEachImg("100%");
      } else {
        setWidthToEachImg("60%");
      }
    };
  },
  beforeDestroy(){
      window.clearInterval(this.interval);
  }
};
</script>
