<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">{JSON} Placeholder</div>
          <div class="panel-body">
            Example of getting backend data, using
            <a
              @click="handleExternalLink"
              href="https://jsonplaceholder.typicode.com/"
              >{JSON} Placeholder</a
            >
            <user-table
              :users="users"
              @add:user="addUser"
              @delete:user="deleteUser"
              @edit:user="editUser"
            />
            <user-form :users="users" @add:user="addUser" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserTable from "./UserTable";
import UserForm from "./UserForm";

export default {
  name: "json-placeholder",
  components: {
    UserTable,
    UserForm,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    handleExternalLink() {
      window.location.href = "https://jsonplaceholder.typicode.com/";
    },
    async addUser(user) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        const data = await response.json();
        this.users = [...this.users, data];
      } catch (error) {
        console.log(error);
      }
    },

    async deleteUser(userId) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          method: "DELETE",
        });
        const filteredUsers = this.users.filter((user) => user.id !== userId);
        this.users = filteredUsers;
      } catch (error) {
        console.log(error);
      }
    },

    async editUser(userId, updatedUser) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          {
            method: "PUT",
            body: JSON.stringify(updatedUser),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        const data = await response.json();
        this.users = this.users.map((user) =>
          user.id == userId ? data : user
        );
      } catch (error) {
        console.log(error);
      }
    },

    async getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
