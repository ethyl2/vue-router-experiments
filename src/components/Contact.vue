<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Contact Page</div>
          <div class="panel-body">
            <employee-table />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeTable from "./EmployeeTable.vue";

export default {
  components: {
    EmployeeTable,
  },
};
</script>