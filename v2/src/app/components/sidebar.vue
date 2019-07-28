<template>
  <div>
        <div id="sidebar-toggle-btn" class="sidebar-toggle animateEaseInOut">
            <button class="btn btn-default" type="button">
                <span class="glyphicon glyphicon-menu-hamburger"></span>
            </button>
        </div>
        <div id="sidebar" class="sidebar animateEaseInOut">
            <router-link class="nav-link" to="/about">
                <h4 class="nav-link-text">About</h4>
                <span class="nav-link-icon-span">
                    <hr class="nav-link-line" />
                    <p class="nav-link-icon"><i class="material-icons">account_box</i></p>
                </span>
                <p class="nav-link-subtitle">Who I Am</p>
            </router-link>
            <router-link class="nav-link" to="/work">
                <h4 class="nav-link-text">Work</h4>
                <span class="nav-link-icon-span">
                    <hr class="nav-link-line" />
                    <p class="nav-link-icon"><i class="material-icons">desktop_mac</i></p>
                </span>
                <p class="nav-link-subtitle">View Projects</p>
            </router-link>
            <router-link class="nav-link" to="/contact">
                <h4 class="nav-link-text">Contact</h4>
                <span class="nav-link-icon-span">
                    <hr class="nav-link-line" />
                    <p class="nav-link-icon"><i class="material-icons">contact_phone</i></p>
                </span>
                <p class="nav-link-subtitle">Get In Touch</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    computed: {
        $navToggleBtn: () => document.getElementById('sidebar-toggle-btn'),
        $sidebar: () => document.getElementById('sidebar'),
        $navLinks: () => document.getElementsByClassName('nav-link')
    },
    methods: {
        toggleNav(){
            this.$sidebar.classList.toggle('sidebar-visible');
            this.$navToggleBtn.classList.toggle('sidebar-toggle-active');
        }
    },
    mounted(){
        this.$navToggleBtn.addEventListener('click', this.toggleNav);
        document.getElementById('main').addEventListener('click', () => {
            if(this.$sidebar.classList.contains('sidebar-visible')){
                this.toggleNav();
            }
        });
        Array.prototype.forEach.call(this.$navLinks, navLink => {
            navLink.addEventListener('click', this.toggleNav);
        });
    }
}
</script>