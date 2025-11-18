<template>
   <form class="formulario-inicio-sesion"  novalidate>

                 <div class="d-flex justify-content-center mb-4">
                       <img src="../../../assets/img/user.png" alt="logo-icono" class="logo-icono-login">
                 </div>

                <div class="mb-3">

                    <label>RUT</label>

                    <input
                        class="form-control"
                        type="text"


                        placeholder="Ingrese su RUT sin puntos ni digitos"
                        autocomplete="off"
                        maxlength="12"
                        minlength="8"
                        required
                    >




                </div>

                <div class="mb-3">

                    <label>Contraseña</label>

                    <div class="input-group">
                        <input


                            class="form-control login-mostrar-contraseña"

                            placeholder="Ingrese su contraseña"
                            autocomplete="off"
                            maxlength="30"
                            required
                        >
                        <div>
                                    <p><span class="mdi mdi-eye-off-outline fs-5"></span></p>

                        </div>



                    </div>


                </div>
                <button type="submit" class="btn btn-primary btn-login px-4 py-2 d-flex justify-content-center">
                            <div><div class="loader-login"></div></div>

                </button>
            </form>
</template>

<script setup lang="ts">

</script>

