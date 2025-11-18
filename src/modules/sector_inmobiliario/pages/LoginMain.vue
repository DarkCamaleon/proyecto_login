<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center min-h-dvh">
    <header class="flex flex-col justify-center items-center p-12 bg-linear-to-br from-blue-600 to-indigo-800 text-center text-white h-full">
      <h1 class="text-4xl font-bold mb-4">Bienvenido de Nuevo</h1>
      <p class="text-indigo-100">Nos alegra verte por aqui. Ingresa a tu cuenta para continuar explorando.</p>
      <svg class="w-40 h-40 mt-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
    </header>

    <main class="flex flex-col justify-center items-center h-screen">
      <div id="login-form" class="form-container">
        <h2 class="text-3xl font-bold mb-2 text-center">Iniciar Sesion</h2>
        <div class="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>

        <form action="#" class="form-container">
          <div class="mb-4">
            <label for="usuario" class="block text-sm font-medium text-gray-400
             mb-2">Usuario</label>
            <input type="text" name="nombre_usuario" id="usuario"
              class="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none
              transition duration-300"
              placeholder="Ingrese Nombre de Usuario">
          </div>

          <div class="mb-6">
            <label for="contraseña" class="block text-sm font-medium text-gray-400 mb-2">
            Contraseña
          </label>

          <input type="password" name="password" id="contraseña" placeholder="Ingrese Contraseña" class="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300">
          </div>
        </form>

        <div class="mb-6 text-center">
          <a href="#" class="text-sm text-blue-400 hover:underline">
            ¿Olvidaste tu contraseña?</a>
        </div>
      </div>

      <div class="w-full">
         <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">Ingresar</button>
      </div>
        <p class="text-center text-sm text-gray-400 mt-6">¿No tienes una cuenta ? <a class="font-medium text-blue-400 hover:underline" href="#">Registrate aqui</a></p>

    </main>
  </div>

</template>



<script setup lang="ts">



</script>

