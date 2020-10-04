<template>
  <div id="employee-form" class="container py-5">
    <div class="row">
      <div class="column is-half is-offset-one-quarter">
        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Full Name"
                v-model="employee.name"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="Email"
                v-model="employee.email"
              />
            </div>
          </div>
          <div class="control">
            <button class="button is-primary">Add Contact</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "employee-form",
  data() {
    return {
      employee: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add:employee", this.employee);
    },
  },
};
</script>
