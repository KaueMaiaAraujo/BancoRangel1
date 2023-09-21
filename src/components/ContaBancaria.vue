<template>
  <div v-if="authenticated">
    <h2>Conta Bancária</h2>
    <p>Saldo: R$ {{ saldo.toFixed(2) }}</p>
    <button @click="depositar(100)">Depositar R$ 100</button>
    <button @click="sacar(100)">Sacar R$ 100</button>
    <button @click="logout">Sair</button>
  </div>
  <div v-else>
    <p>Você não está autenticado. Faça login para acessar a conta bancária.</p>
  </div>
</template>

<script>
export default {
  props: {
    authenticated: Object,
    saldo: Number,
  },
  methods: {
    depositar(valor) {
      this.$emit('depositar', valor);
    },
    sacar(valor) {
      this.$emit('sacar', valor);
    },
    logout() {
      this.$emit('authenticated', null);
    },
  },
};
</script>