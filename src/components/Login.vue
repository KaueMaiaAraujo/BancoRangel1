<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="cpf" required />
      </div>
      <div>
        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required />
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
      <div>
        <p>Não tem uma conta? <router-link to="/cadastro">Cadastre-se</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: '',
      senha: '',
    };
  },
  methods: {
    login() {
      // Verifique as credenciais do usuário aqui.
      // Você pode comparar com dados armazenados localmente.
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.cpf === this.cpf && u.senha === this.senha);
      
      if (user) {
        this.$emit('authenticated', user);
      } else {
        alert('Credenciais inválidas');
      }
    },
  },
};
</script>
