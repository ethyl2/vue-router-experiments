<template>
  <div id="employee-table" class="table is-hoverable is-striped">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.name }}</td>
          <td class="email" @click="handleEmail(employee.email)">
            <a>{{ employee.email }}</a>
          </td>
        </tr>
      </tbody>
    </table>
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