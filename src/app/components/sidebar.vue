<template>
  <div>
        <div class="sidebar-toggle animateEaseInOut">
            <button class="btn btn-default" type="button">
                <span class="glyphicon glyphicon-menu-hamburger"></span>
            </button>
        </div>
        <div class="sidebar animateEaseInOut">
            <router-link class="nav-link active" to="/">
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
    name: 'SideBar'
}
</script>