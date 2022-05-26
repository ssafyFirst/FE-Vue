<template>
  <div class="account-error-list">
    <p v-for="(errors, field) in authError" :key="field">
      <ul>
        <li v-for="(error, idx) in errors" :key="idx">
          <p>아이디 혹은 비밀번호가 일치하지 않습니다.</p>
        </li>
      </ul>
    </p>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'AccountErrorList',
    computed: {
      ...mapGetters(['authError'])
    },
  }
</script>

<style>
  .account-error-list {
    color: red;
  }
</style>
