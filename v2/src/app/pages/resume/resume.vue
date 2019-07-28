<template>
<div class="section">
    <div class="content-wrapper resume-section container-fluid">
            <div class="col-md-11 col-sm-12 col-centered">
                <div class="row heading-wrapper">
                    <div class="name-heading-wrapper">
                        <h1 class="title heading-1"><strong>A</strong>mninder <strong>C</strong>hahal</h1>
                        <p class="subtitle"> +1 (519) 722-1603 &nbsp;&nbsp;<strong>•</strong>&nbsp;&nbsp; amninderchahal101@gmail.com &nbsp;&nbsp;<strong>•</strong>&nbsp;&nbsp; Waterloo, ON, Canada</p>
                    </div>
                </div>
                <div class="row resume-row" v-for="(section, index) in resumeData" :key="index">
                    <div class="col-md-3 col-sm-12">
                        <p class="title heading-2">{{section.heading}}</p>
                    </div>
                    <div class="col-md-9 col-sm-12 ">
                        <div class="resume-section-description" v-if="section.description">{{section.description}}</div>
                        <template v-if="section.repeatable">
                            <div class="resume-section-content" v-for="(item, index) in section.repeatable" :key="index">
                                <div v-if="item.title || item.institutionName" class="header">
                                    <p class="title heading-4">{{item.institutionName}}</p>
                                    <p class="name title heading-5">{{item.location}}</p>
                                </div>
                                <div v-if="item.duration || item.location" class="details">
                                    <p class="duration title heading-5">{{item.title}}</p>
                                    <p class="location title heading-5">{{item.duration}}</p>
                                </div>
                                <div v-if="item.text" class="description">
                                    <p>{{item.text}}</p>
                                </div>
                                <div v-if="item.listItems">
                                    <p class="description-title">{{item.listTitle}}</p>
                                    <p class="list-item" v-for="(listItem, index) in item.listItems" :key="index">{{listItem}}</p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Resume',
  computed: mapState(['resumeData'])
}
</script>
