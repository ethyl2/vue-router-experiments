<template>
  <div id="app">
    <Header></Header>

    <section class="section">
      <div class="container">
        <router-view
          :employees="employees"
          @add:employee="addEmployee"
          @delete:employee="deleteEmployee"
        />
      </div>
    </section>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Richard Hendricks",
          email: "richard@piedpiper.com",
        },
        {
          id: 2,
          name: "Bertram Gilfoyle",
          email: "gilfoyle@piedpiper.com",
        },
        {
          id: 3,
          name: "Dinesh Chugtai",
          email: "dinesh@piedpiper.com",
        },
        {
          id: 4,
          name: "Adaline Cassidy",
          email: "adaline@piedpiper.com",
        },
        {
          id: 5,
          name: "Adrian Winter",
          email: "adrian@piedpiper.com",
        },
        {
          id: 6,
          name: "Persephone Kay",
          email: "persephone@piedpiper.com",
        },
      ],
    };
  },
  methods: {
    addEmployee(employee) {
      const lastId =
        this.employees.length > 0
          ? this.employees[this.employees.length - 1].id
          : 0;
      const id = lastId + 1;
      const newEmployee = { ...employee, id };
      this.employees = [...this.employees, newEmployee];
    },
    deleteEmployee(employeeId) {
      console.log(employeeId);
      const filteredEmployees = this.employees.filter(
        (employee) => employee.id !== employeeId
      );
      this.employees = filteredEmployees;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
