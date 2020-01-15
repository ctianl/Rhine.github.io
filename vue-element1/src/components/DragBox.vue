<template>
  <div>
    <div style='margin:15px'>
      <el-checkbox v-model="dateBoo" label="date"></el-checkbox>
      <el-checkbox v-model="authorBoo" label="author"></el-checkbox>
      <el-checkbox v-model="readingBoo" label="readings"></el-checkbox>
      <el-checkbox v-model="titleBoo" label="title"></el-checkbox>
    </div>

    <el-row>
      <el-col>
        <el-table :data="tableData" height="400" border style="overflow-y:hidden">
          <el-table-column prop="id" label="ID" align="center" width="100px"></el-table-column>
          <el-table-column v-if="dateBoo" prop="date" label="Date" align="center" width="200px"></el-table-column>
          <el-table-column
            v-if="authorBoo"
            prop="author"
            label="Author"
            align="center"
            width="100px"
          ></el-table-column>
          <el-table-column
            v-if="readingBoo"
            prop="reading"
            label="readings"
            align="center"
            width="100px"
          ></el-table-column>
          <el-table-column v-if="titleBoo" prop="title" label="Title" align="center"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "DragBox",
  data() {
    return {
      dateBoo: true,
      authorBoo: true,
      titleBoo: true,
      readingBoo: true,

      tableData: [
        {
          date: "2016-05-01",
          author: "Timothy",
          title: "Xmmgeo Bdjwolseii Jqcwtlv Ysjgg Dujx",
          id: 1,
          reading: 3232
        },
        {
          date: "2016-05-03",
          author: "Joseph",
          title: "Bssvw Exftjv Wljich Fgds Pewm Lcb",
          id: 2,
          reading: 1023
        },
        {
          date: "2016-05-04",
          author: "Brian",
          title: "Guzrfpf Arxnbbnud Rxbcx Feubielff Ptphlkx Hfyxnofvcy Dmszqd",
          id: 3,
          reading: 324
        },
        {
          id: 4,
          date: "2016-05-02",
          author: "Sarah",
          title:
            "Noyi Pzrfrr Gdmlve Qnwkqxs Nogbjbdtm Wnd Jsmycvmxo Okii Eoglnngqob",
          reading: 1932
        }
      ]
    };
  }
};
</script>
<style scoped>
.show {
  display: none;
}
</style>