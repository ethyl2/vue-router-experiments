<template>
  <div id="user-table">
    <p v-if="users.length <= 0">No users found</p>
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
          <tr v-for="user in users" :key="user.id">
            <td v-if="userToEditId === user.id">
              <input class="input" type="text" v-model="user.name" />
            </td>
            <td v-else>{{ user.name }}</td>

            <td v-if="userToEditId === user.id">
              <input class="input" type="email" v-model="user.email" />
            </td>
            <td v-else class="email" @click="handleEmail(user.email)">
              <a>{{ user.email }}</a>
            </td>

            <td v-if="userToEditId === user.id">
              <button class="button is-small">
                <span
                  role="img"
                  aria-label="Floppy Disk"
                  @click="handleEdit(user)"
                  >💾</span
                >
              </button>
              <button class="button is-small" @click="cancelEdit(user)">
                <span role="img" aria-label="Back Arrow">🔙</span>
              </button>
            </td>

            <td v-else>
              <button class="button is-small">
                <span
                  role="img"
                  aria-label="Fountain Pen"
                  @click="startEdit(user)"
                  >🖋️</span
                >
              </button>
              <button class="button is-small" @click="handleDelete(user.id)">
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
  name: "user-table",
  props: {
    users: Array,
  },
  data() {
    return {
      userToEditId: null,
      cachedUser: {},
    };
  },
  methods: {
    handleEmail(email) {
      window.location.href = `mailto:${email}`;
    },
    handleDelete(userId) {
      this.$emit("delete:user", userId);
    },
    startEdit(user) {
      this.userToEditId = user.id;
      this.cachedUser = Object.assign({}, user);
    },
    handleEdit(user) {
      if (user.name === "" || user.email === "") {
        return;
      }
      this.$emit("edit:user", user.id, user);
      this.userToEditId = null;
    },
    cancelEdit(user) {
      this.userToEditId = null;
      Object.assign(user, this.cachedUser);
      this.cachedUser = {};
    },
  },
};
</script>

<style scoped>
#user-table {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 2em;
}
</style>