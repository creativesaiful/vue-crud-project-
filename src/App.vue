
<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary container-fluid bg-dark">
  <div class="container">

  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/users">Users</RouterLink>
        </li>
        
      </ul>
      
    </div>

   
  </div>
</nav>
<RouterView />
   
</template>

