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
            <td v-if="employeeToEditId === employee.id">
              <input class="input" type="text" v-model="employee.name" />
            </td>
            <td v-else>{{ employee.name }}</td>

            <td v-if="employeeToEditId === employee.id">
              <input class="input" type="email" v-model="employee.email" />
            </td>
            <td v-else class="email" @click="handleEmail(employee.email)">
              <a>{{ employee.email }}</a>
            </td>

            <td v-if="employeeToEditId === employee.id">
              <button class="button is-small">
                <span
                  role="img"
                  aria-label="Floppy Disk"
                  @click="handleEdit(employee)"
                  >💾</span
                >
              </button>
              <button class="button is-small" @click="cancelEdit(employee)">
                <span role="img" aria-label="Back Arrow">🔙</span>
              </button>
            </td>

            <td v-else>
              <button class="button is-small">
                <span
                  role="img"
                  aria-label="Fountain Pen"
                  @click="startEdit(employee)"
                  >🖋️</span
                >
              </button>
              <button
                class="button is-small"
                @click="handleDelete(employee.id)"
              >
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
  data() {
    return {
      employeeToEditId: null,
      cachedEmployee: {},
    };
  },
  methods: {
    handleEmail(email) {
      window.location.href = `mailto:${email}`;
    },
    handleDelete(employeeId) {
      this.$emit("delete:employee", employeeId);
    },
    startEdit(employee) {
      this.employeeToEditId = employee.id;
      this.cachedEmployee = Object.assign({}, employee);
    },
    handleEdit(employee) {
      if (employee.name === "" || employee.email === "") {
        return;
      }
      this.$emit("edit:employee", employee.id, employee);
      this.employeeToEditId = null;
    },
    cancelEdit(employee) {
      this.employeeToEditId = null;
      Object.assign(employee, this.cachedEmployee);
      this.cachedEmployee = {};
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