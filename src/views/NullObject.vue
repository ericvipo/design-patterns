<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-6 max-w-md mx-auto">
      <label class="block col-span-full">Selecciona un Usuario</label>
      <select
        v-model="name"
        class="block col-start-2 col-span-4 mt-3 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option></option>
        <option>Bob</option>
        <option>Joe</option>
      </select>
      <button
        @click="loginClick"
        class="col-start-2 col-span-4 mt-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Ingresar
      </button>
      <template v-if="currentUser">
        <div class="col-start-2 col-span-4 text-2xl mt-3 text-indigo-600">
          Bienvenido {{ currentUser }}
        </div>
        <div class="col-start-2 col-span-4">{{ msg }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import User from "@/patterns/NullObject/User";
import NullUser from "@/patterns/NullObject/NullUser";

export default {
  data() {
    return {
      name: "Joe",
      msg: "",
      currentUser: ""
    };
  },
  methods: {
    loginClick() {
      if (this.name == "") this.name = null;
      this.loginUser(this.getUser(this.name));
    },
    getUser(name) {
      if (name == null) return new NullUser();
      else return new User(name);
    },
    loginUser(user) {
      this.currentUser = user.name;
      if (user.hasAccess()) this.msg = "Felicidades, usted ha iniciado sesión";
      else this.msg = "Debe iniciar sesión para ver esto";
    }
  }
};
</script>

<style></style>
