
        <div class="w-full md:w-1/2 p-8 md:p-12">
            <!-- Login Form -->
            <div id="login-form" class="form-container">
                <h2 class="text-3xl font-bold mb-2 text-center">Iniciar Sesión</h2>
                <div class="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <form>
                    <div class="mb-4">
                        <label for="login-email" class="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                        <input type="email" id="login-email" class="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300" placeholder="tu@email.com">
                    </div>
                    <div class="mb-6">
                        <label for="login-password" class="block text-sm font-medium text-gray-400 mb-2">Contraseña</label>
                        <input type="password" id="login-password" class="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300" placeholder="••••••••">
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <a href="#" class="text-sm text-blue-400 hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                        Ingresar
                    </button>
                </form>
                <p class="text-center text-sm text-gray-400 mt-6">
                    ¿No tienes una cuenta? <a href="#" id="show-signup" class="font-medium text-blue-400 hover:underline">Regístrate aquí</a>
                </p>
            </div>

            <!-- Signup Form (Initially Hidden) -->
            <div id="signup-form" class="form-container hidden">
                <h2 class="text-3xl font-bold mb-2 text-center">Crear Cuenta</h2>
                <div class="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
                <form>
                    <div class="mb-4">
                        <label for="signup-name" class="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                        <input type="text" id="signup-name" class="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition duration-300" placeholder="John Doe">
                    </div>
                    <div class="mb-4">
                        <label for="signup-email" class="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                        <input type="email" id="signup-email" class="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition duration-300" placeholder="tu@email.com">
                    </div>
                    <div class="mb-6">
                        <label for="signup-password" class="block text-sm font-medium text-gray-400 mb-2">Contraseña</label>
                        <input type="password" id="signup-password" class="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition duration-300" placeholder="••••••••">
                    </div>
                    <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                        Crear Cuenta
                    </button>
                </form>
                <p class="text-center text-sm text-gray-400 mt-6">
                    ¿Ya tienes una cuenta? <a href="#" id="show-login" class="font-medium text-indigo-400 hover:underline">Inicia sesión</a>
                </p>
            </div>
        </div>
    </div>

     <script>
        // Get elements
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const showSignupBtn = document.getElementById('show-signup');
        const showLoginBtn = document.getElementById('show-login');

        // Function to switch forms
        const switchForms = (hideForm, showForm) => {
            hideForm.classList.add('slide-out');

            setTimeout(() => {
                hideForm.classList.add('hidden');
                hideForm.classList.remove('slide-out');

                showForm.classList.remove('hidden');
                showForm.classList.add('slide-in');
            }, 480); // Corresponds to animation duration

            setTimeout(() => {
                 showForm.classList.remove('slide-in');
            }, 1000)
        };

        // Event listeners
        showSignupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchForms(loginForm, signupForm);
        });

        showLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchForms(signupForm, loginForm);
        });
    </script>
