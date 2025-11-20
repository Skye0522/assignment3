import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    list: [],
    ID: '',
    Time: '',
    Todo: '',
    Note: '',
  }),
  actions: {
    //SELECT
    async selectBtn() {
      try {
        const res = await axios.get(
          'https://m3h-nochiyama-containerapp2.purplefield-f71af35b.japaneast.azurecontainerapps.io/api/SELECT',
        )
        this.list = res.data.List
      } catch (error) {
        console.error('データ取得に失敗しました', error)
      }
    },
    //INSERT
    async insertBtn() {
      try {
        await axios.get(
          'https://m3h-nochiyama-containerapp2.purplefield-f71af35b.japaneast.azurecontainerapps.io/api/INSERT',
          {
            params: {
              ID: this.ID,
              Time: this.Time,
              Todo: this.Todo,
              Note: this.Note,
            },
          },
        )
        this.ID = ''
        this.Time = ''
        this.Todo = ''
        this.Note = ''
      } catch (error) {
        console.error('データ追加に失敗しました', error)
      }
    },
    //DELETE
    async deleteBtn() {
      try {
        await axios.get(
          'https://m3h-nochiyama-containerapp2.purplefield-f71af35b.japaneast.azurecontainerapps.io/api/DELETE',
          {
            params: {
              ID: this.ID,
            },
          },
        )
        this.ID = ''
        this.Time = ''
        this.Todo = ''
        this.Note = ''
      } catch (error) {
        console.error('データ削除に失敗しました', error)
      }
    },
    //UPDATE
    async updateBtn() {
      try {
        await axios.get(
          'https://m3h-nochiyama-containerapp2.purplefield-f71af35b.japaneast.azurecontainerapps.io/api/UPDATE',
          {
            params: {
              ID: this.ID,
              Time: this.Time,
              Todo: this.Todo,
              Note: this.Note,
            },
          },
        )
        this.ID = ''
        this.Time = ''
        this.Todo = ''
        this.Note = ''
      } catch (error) {
        console.error('データ更新に失敗しました', error)
      }
    },
  },
})
