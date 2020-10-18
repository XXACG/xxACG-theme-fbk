<template>
  <div>
    <vs-row style="display: flex; justify-content: center;">
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
                <vs-th sort @click="users = $vs.sortData($event ,users, 'catalog')">类别</vs-th>
                <vs-th></vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr :key="i" v-for="(item, i) in $vs.getPage($vs.getSearch(users, search), page, max)"
                     style="height: 50px">
                <vs-tooltip bottom>
                  <vs-td>{{ item.name }}</vs-td>
                  <template #tooltip>
                    <img width="100%" style="border-radius: 10px;" :src="item.cover" alt="">
                  </template>
                </vs-tooltip>
                <vs-td>{{ item.producer }}</vs-td>
                <vs-td>{{ item.date }}</vs-td>
                <vs-td>{{ item.catalog }}</vs-td>
                <vs-td style="display: flex; flex-direction: row">
                  <vs-button style="min-width: 40px" animation-type="scale">
                    <ion-icon name="information-circle-outline"></ion-icon>
                    <template #animate>
                      详情
                    </template>
                  </vs-button>
                  <vs-button style="min-width: 40px" animation-type="scale" flat>
                    <ion-icon name="cloud-download-outline"></ion-icon>
                    <template #animate>
                      下载
                    </template>
                  </vs-button>
                </vs-td>
              </vs-tr>
            </template>
            <template #footer>
              <vs-pagination v-model="page" :length="$vs.getLength(users, max)"/>
            </template>
          </vs-table>
        </div>

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
        name: "Lorem ipsum",
        producer: "Yuzi-soft",
        date: "2019年",
        catalog: "none",
        cover: "https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      },
      {
        name: "Lorem ipsum",
        producer: "Yuzi-soft",
        date: "2019年",
        catalog: "none",
        cover: "https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      },
      {
        name: "Lorem ipsum",
        producer: "Yuzi-soft",
        date: "2019年",
        catalog: "none",
        cover: "https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      },
      {
        name: "Lorem ipsum",
        producer: "Yuzi-soft",
        date: "2019年",
        catalog: "none",
        cover: "https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      },
      {
        name: "Lorem ipsum",
        producer: "Yuzi-soft",
        date: "2019年",
        catalog: "none",
        cover: "https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      },
      {
        name: "Lorem ipsum",
        producer: "Yuzi-soft",
        date: "2019年",
        catalog: "none",
        cover: "https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      },
      {
        name: "Lorem ipsum",
        producer: "Yuzi-soft",
        date: "2019年",
        catalog: "none",
        cover: "https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      },
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
</style>
