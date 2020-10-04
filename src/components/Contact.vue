<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Contacts</div>
          <div class="panel-body">
            <employee-table :employees="employees" v-on="$listeners" />
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">Add Contact</div>
          <div class="panel-body">
            <employee-form v-on="$listeners" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeTable from "@/components/EmployeeTable";
import EmployeeForm from "./EmployeeForm";

export default {
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  props: {
    employees: Array,
  },
  data() {
    return {
      notes:
        "Notice that this parent component adds v-on='$listeners' to its child \
         to be able to pass the event emitted by the child up to its grandparent",
    };
  },
};
</script>