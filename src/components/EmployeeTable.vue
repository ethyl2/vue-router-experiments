<template>
  <div id="employee-table">
    <p v-if="employees.length <= 0">No contacts found</p>
    <div v-else class="table is-hoverable is-striped">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td class="email" @click="handleEmail(employee.email)">
              <a>{{ employee.email }}</a>
            </td>
            <td>
              <button class="button is-small">
                <span role="img" aria-label="Fountain Pen">🖋️</span>
              </button>
              <button class="button is-small" @click="handleDelete(employee)">
                <span role="img" aria-label="Wastebasket">🗑️</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "employee-table",
  props: {
    employees: Array,
  },
  methods: {
    handleEmail(email) {
      window.location.href = `mailto:${email}`;
    },
    handleDelete(employee) {
      this.$emit("delete:employee", employee.id);
    },
  },
};
</script>

<style scoped>
#employee-table {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 2em;
}
</style>