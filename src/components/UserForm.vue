<template>
  <div id="user-form" class="container py-5">
    <div class="row">
      <div class="column is-half is-offset-one-quarter">
        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                :class="{ 'has-error': submitting && invalidName }"
                type="text"
                placeholder="Full Name"
                v-model="user.name"
                @focus="clearStatus"
                @keypress="clearStatus"
                ref="name-input"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                :class="{ 'has-error': submitting && invalidEmail }"
                type="email"
                placeholder="Email"
                v-model="user.email"
                @focus="clearStatus"
                @keypress="clearStatus"
              />
            </div>
          </div>

          <p v-if="error && submitting" class="error-message">
            <span role="img" aria-label="Exclamation Mark">❗</span> Please fill
            out all required fields with valid values.
          </p>
          <p v-if="success" class="success-message">
            <span role="img" aria-label="Check Mark Button">✅</span> User
            successfully added
          </p>

          <div class="control">
            <button class="button is-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-form",
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      submitting: false,
      error: false,
      success: false,
    };
  },
  computed: {
    invalidName() {
      return this.user.name === "";
    },
    invalidEmail() {
      // eslint-disable-next-line
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return (
        this.user.email === "" ||
        !re.test(String(this.user.email).toLowerCase())
      );
    },
  },
  methods: {
    handleSubmit() {
      this.submitting = true;

      if (!this.invalidName && !this.invalidEmail) {
        this.$emit("add:user", this.user);

        this.error = false;
        this.success = true;
        this.submitting = false;
        this.user = {
          name: "",
          email: "",
        };
        this.$refs["name-input"].focus();
        this.error = true;
      }
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    },
  },
};
</script>

<style scoped>
[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}

.has-error {
  border: 1px solid red;
}
</style>