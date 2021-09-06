<template>
  <h1>Search Page</h1>
  <SearchBar @set-keyword="setSearchData"/>
  <div class="result-container">
    <div v-for="(item, index) in filteredList" :key="index">
      <item :title="item.title" :img="item.img"/>
    </div>
  </div>
</template>

<script>

import SearchBar from './SearchBar';
import Item from './Item';

import {_dummyData} from '../Data/_dummyData';

export default {
  name: "SearchPage",
  components: {
    SearchBar,
    Item
  },
  data() {
    return {
      items: _dummyData,
      keyword: ''
    }
  },
  computed: {
    filteredList() {
      return (
          this.items.filter((item) =>
              item.title.toLowerCase().includes(this.keyword.toLowerCase()))
      )
    }
  },
  methods: {
    setSearchData(keyword) {
      this.keyword = keyword;
    }
  }
}
</script>

<style scoped>

.result-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 5rem;
}

</style>
