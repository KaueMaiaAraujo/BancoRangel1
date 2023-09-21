<template>
  <div id="app">
    <router-view
      :authenticated="authenticated"
      :saldo="saldo"
      @authenticated="setAuthenticated"
      @depositar="depositar"
      @sacar="sacar"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      authenticated: null,
      saldo: 1000,
    };
  },
  methods: {
    setAuthenticated(user) {
      this.authenticated = user;
    },
    depositar(valor) {
      this.saldo += valor;
    },
    sacar(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
      } else {
        alert('Saldo insuficiente');
      }
    },
  },
};
</script>
