<template>
  <div>
    <vs-row>
      <vs-col lg="8" xs="12">

        <div class="table-card">
          <vs-table striped>
            <template #header>
              <vs-input v-model="search" border placeholder="Search"/>
            </template>
            <template #thead>
              <vs-tr>
                <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">游戏名称</vs-th>
                <vs-th sort @click="users = $vs.sortData($event ,users, 'producer')">厂商</vs-th>
                <vs-th sort @click="users = $vs.sortData($event ,users, 'date')">发行时间</vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr :key="i" v-for="(item, i) in $vs.getPage($vs.getSearch(users, search), page, max)"
                     style="height: 50px">
                <vs-td>{{ item.name }}</vs-td>
                <vs-td>{{ item.producer }}</vs-td>
                <vs-td>{{ item.date }}</vs-td>
                <template #expand>
                  <div class="gal-detail">
                    <div>
                      <img :src="item.cover" height="35px" alt="">
                      <p>{{ item.name }}</p>
                    </div>
                    <div>
                      <vs-button animation-type="scale" flat>
                        <ion-icon name="cloud-download-outline"></ion-icon>
                        <template #animate>
                          下载
                        </template>
                      </vs-button>
                    </div>
                  </div>
                </template>
              </vs-tr>
            </template>
            <template #footer>
              <vs-pagination v-model="page" :length="$vs.getLength(users, max)"/>
            </template>
          </vs-table>
        </div>

      </vs-col>
      <vs-col lg="4" xs="12">
        <vs-row>
          <vs-col :key="index" v-for="(block, index) in 3" lg="4" xs="12">
            <div
              style="width: 100%; height: 100%; padding: 50px 25px; background-color: rgba(var(--vs-dark), 1); color: #e6e9ea;">
              BLOCK
            </div>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "catalog",
  data: () => ({
    page: 1,
    max: 5,
    search: '',
    users: [
      {
        "name": "Lorem ipsum",
        "producer": "Yuzi-soft",
        "date": "2019年",
        "cover": "https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg",
      }
    ]
  })
}
</script>

<style scoped>
.table-card {
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  border-bottom: 0 solid rgba(0, 0, 0, .03);
  background: #ffffff;
  position: relative;
  overflow: hidden;
  transition: all .25s ease;
  height: auto;
}

.gal-detail,
.gal-detail > div {
  display: flex;
  align-items: center;
}

.gal-detail {
  width: 100%;
  justify-content: space-between;
}

.gal-detail > div p {
  margin-left: 10px;
}

.gal-detail > div img {
  border-radius: 10px;
}

</style>
