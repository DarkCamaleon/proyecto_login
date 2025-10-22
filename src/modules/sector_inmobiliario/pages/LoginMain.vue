<template>
  <header class="grid-cols-6">
    <h1>Bienvenido de Nuevo</h1>
    <p>Nos alegra verte por aqui. Ingresa a tu cuenta para continuar explorando.</p>
  </header>

  <main class="grid-cols-6">
    <h2>Iniciar Sesion</h2>

    <form action="#">

      <label for="usuario">Usuario</label>
      <input type="text" name="nombre_usuario" id="usuario" placeholder="Ingrese Nombre de Usuario">
      <label for="contraseña">
        Contraseña
      </label>

      <input type="password" name="password" id="contraseña" placeholder="Ingrese Contraseña">
    </form>

    <span>¿Olvidaste tu contraseña?</span>
    <button>Ingresar</button>

    <p>¿No tienes una cuenta ? <a href="#">Registrate aqui</a></p>
  </main>


</template>



<script setup lang="ts">

</script>

