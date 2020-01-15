<template>
  <div>
    <el-row>
      <el-col :md='17' :lg='17' :sm='24' :xs='24'>
        <el-table :data="tableData" style="width: 100%" border >
          <el-table-column prop="date" label="Date" align="center" width='100px' ></el-table-column>
          <el-table-column prop="name" label="Author" align="center" width='100px' ></el-table-column>
          <el-table-column prop="address" label="Title" align="center"></el-table-column>
          <el-table-column label="Drag" width='100px' align="center">
            <template>
              <i class="el-icon-rank" style="font-size:20px"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Sortable from "sortablejs";

export default {
  name: "DragTable",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "Sarah",
          address:
            "Noyi Pzrfrr Gdmlve Qnwkqxs Nogbjbdtm Wnd Jsmycvmxo Okii Eoglnngqob"
        },
        {
          date: "2016-05-04",
          name: "Brian",
          address: "Guzrfpf Arxnbbnud Rxbcx Feubielff Ptphlkx Hfyxnofvcy Dmszqd"
        },
        {
          date: "2016-05-01",
          name: "Timothy",
          address: "Xmmgeo Bdjwolseii Jqcwtlv Ysjgg Dujx"
        },
        {
          date: "2016-05-03",
          name: "Joseph",
          address: "Bssvw Exftjv Wljich Fgds Pewm Lcb"
        }
      ]
    };
  },
  mounted() {
    window.vue = this;

    const tbody = document.querySelector(".el-table__body-wrapper tbody");
    const _this = this;
    Sortable.create(tbody, {
      onEnd({ newIndex, oldIndex }) {
        const currRow = _this.tableData.splice(oldIndex, 1)[0];
        _this.tableData.splice(newIndex, 0, currRow);
      }
    });
  }
};
</script>
<style scoped>
</style>