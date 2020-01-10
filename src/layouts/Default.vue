<template>
  <div class="layout">
    <header class="header">
      <strong>
       <g-image alt="Logo" src="~/logo.png" width="15" /> <g-link to="/" >Gidera</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Companies</g-link>
        <g-link class="nav__link" to="/about/">Team</g-link>
        <g-link class="nav__link" to="/team/">Resources</g-link>
        <g-link class="nav__link" to="/">Programs</g-link>
        <g-link class="nav__link" to="/about/">Blog</g-link>
        <g-link class="nav__link" to="/team/">Contact</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  /* max-width: 760px; */
  /* margin: 0 auto; */
  /* padding-left: 20px; */
  /* padding-right: 20px; */
}

.header {
  font-size: 15px;
  padding: 0px 12rem 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 60px;
  background: #000c2d;
  color: white;
  font-weight: lighter;
}


strong a {
  margin: 10px;
  color: #20de86;
  text-decoration: none;
  /* color: black; */
  font-weight: lighter;
  letter-spacing: 1px;
}

.nav__link {
  color: white!important;
  margin-left: 30px;
  text-decoration: none;
  outline: none;
  transition: 0.3s;
}

.nav__link:hover {
  color:#20de86!important; 
}
</style>
