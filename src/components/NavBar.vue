<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/home">Главная</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about">О нас</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contacts">Контакты</RouterLink>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search">
      </form>
    </div>
  </div>
</nav>
</template>
<style lang="scss" scoped>
nav{
    background-color:#81728f;
    text-transform: uppercase
}
nav {
  a{
    padding-left: 5em;
    text-decoration: none;
    color: #000000;
    &:hover{
      color: #f01dd4;
    }
  }
}
</style>