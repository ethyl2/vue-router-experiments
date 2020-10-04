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
        <tr>
          <td>Richard Hendricks</td>
          <td>richard@piedpiper.com</td>
        </tr>
        <tr>
          <td>Bertram Gilfoyle</td>
          <td>gilfoyle@piedpiper.com</td>
        </tr>
        <tr>
          <td>Dinesh Chugtai</td>
          <td>dinesh@piedpiper.com</td>
        </tr>
        <tr>
          <td>Adaline Cassidy</td>
          <td>adaline@piedpiper.com</td>
        </tr>
        <tr>
          <td>Adrian Winter</td>
          <td>adrian@piedpiper.com</td>
        </tr>
        <tr>
          <td>Persephone Kay</td>
          <td>persephone@piedpiper.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "employee-table",
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