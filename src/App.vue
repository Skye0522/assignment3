<script setup>
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const store = useTodoStore()

const items = ref([
  { title: 'ID', key: 'ID' },
  { title: '時間', key: 'Time' },
  { title: 'タスク名', key: 'Todo' },
  { title: 'メモ', key: 'Note' },
])
</script>

<template>
  <header>
    <!--固定ヘッダー-->
    <v-layout class="fixedHeader">
      <v-app-bar color="white">
        <v-btn class="btn1" color="indigo" size="x-large" rounded="pill"> やることりすと </v-btn>
      </v-app-bar>
    </v-layout>
  </header>
  <div class="pageHeader">
    <!--メインコンテンツ-->
    <h1>今日のやることりすと</h1>
    <!--入力部-->
    <div class="form">
      <v-text-field
        class="ml-6 mr-6"
        v-model="store.ID"
        label="IDを入力(必須)"
        placeholder="IDを入力…"
        outlined
      ></v-text-field>
      <v-text-field
        class="ml-6 mr-6"
        v-model="store.Time"
        label="時間を入力"
        placeholder="時間を入力…"
        outlined
      ></v-text-field>
      <v-text-field
        class="ml-6 mr-6"
        v-model="store.Todo"
        label="タスク名を入力"
        placeholder="タスク名を入力…"
        outlined
      ></v-text-field>
    </div>
    <v-text-field
      class="ml-6 mr-6"
      v-model="store.Note"
      label="メモを入力"
      placeholder="メモを入力…"
      outlined
    ></v-text-field>
    <!--ボタン-->
    <div class="btn1">
      <v-btn
        class="getBtn1"
        color="blue"
        size="x-large"
        rounded="pill"
        @click="() => store.insertBtn()"
      >
        タスク追加</v-btn
      >
      <v-btn
        class="getBtn1"
        color="green"
        size="x-large"
        rounded="pill"
        @click="() => store.updateBtn()"
      >
        タスク更新</v-btn
      >
      <v-btn
        class="getBtn1"
        color="red"
        size="x-large"
        rounded="pill"
        @click="() => store.deleteBtn()"
      >
        タスク削除</v-btn
      >
    </div>
    <br />
    <div class="btn2">
      <v-btn
        class="getBtn1"
        color="yellow"
        size="x-large"
        rounded="pill"
        @click="() => store.selectBtn()"
      >
        タスクリスト表示</v-btn
      >
    </div>
    <!--データ表示部-->
    <div class="table1">
      <v-data-table
        :headers="items"
        :items="store.list"
        density="comfortable"
        hover
        fixed-header
        height="300px"
      >
      </v-data-table>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding-top: 50px;
}
.form {
  display: flex;
}
.form .v-text-field {
  width: 200px;
}
.btn1 {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.btn2 {
  display: flex;
  justify-content: center;
}
.table1 {
  display: flex;
  padding-top: 30px;
  padding-bottom: 60px;
}
</style>
