<template>
    <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p class="text-red text-xs mb-3" v-if="errors.length">
            <ul class="list-reset">
                <li class="mb-2" v-for="error in errors">{{ error }}</li>
            </ul>
            </p>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="email">
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" v-model="pass">
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="checkForm">
                    Вход
                </button>
            </div>
        </form>
        <p class="text-center" v-if="success">{{ success }}</p>
    </div>
</template>

<script>
    export default {
        name: "Forms",
        data () {
            return {
                errors: [],
                email: null,
                pass: null,
                success: null
            }
        },
        methods: {
            checkForm: function () {
                this.success = null
                this.errors = []

                if (!this.pass) {
                    this.errors.push('Укажите пароль.')
                }
                if (!this.email) {
                    this.errors.push('Укажите электронную почту.')
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Укажите корректный адрес электронной почты.')
                }

                if (!this.errors.length) {
                    this.success = 'Вы авторизованы!'
                    return true;
                }
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
</script>
