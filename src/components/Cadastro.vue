<template>
  <div>
    <h2>Cadastro</h2>
    <form @submit.prevent="cadastrar">
      <div>
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="cpf" required />
      </div>
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required />
      </div>
      <div>
        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required />
      </div>
      <div>
        <button type="submit">Cadastrar</button>
      </div>
      <div>
        <router-link to="/login">Voltar para o login</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: '',
      nome: '',
      senha: '',
    };
  },
  methods: {
    cadastrar() {
      // Armazene as informações do usuário localmente (simulação).
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({
        cpf: this.cpf,
        nome: this.nome,
        senha: this.senha,
      });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Cadastro realizado com sucesso!');
      this.$router.push('/login');
    },
  },
};
</script>