<template>
    <div class="project">
        <router-link class="project-link" :to="'/work/project/' + (index+1)">
            <img class="project-img" :src="project.img[0]">
            <div class="overlay"></div>
            <div class="text"><i class="material-icons">zoom_in</i></div>
            <p class="project-title title heading-3">{{project.title}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'ProjectLinkItem',
  props: ['project', 'index']
}
</script>

