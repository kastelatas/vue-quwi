<template>
  <div class="auth-page">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "~/components/Forms/LoginForm";

export default {
  layout: 'auth',
  components: {LoginForm}
}
</script>


