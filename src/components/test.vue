<template>
    <div>
        {{params}}
    </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        params: 'hello'
      }
    },
    beforeCreate: function () {
      console.log('------beforeCreate------')
    },
    created: function () {
      console.log('------created------')
    },
    beforeMount: function () {
      console.log('------beforeMount------')
    },
    mounted: function () {
      console.log('------mounted------')
    },
    beforeUpdate: function () {
      console.log('------beforeUpdate------')
    },
    updated: function () {
      console.log('------updated------')
    },
    methods: {
      fun: function () {
        console.log('hello')
      }
    },
    beforeDestory: function () {
      console.log('------beforeDestory------')
    },
    destoryed: function () {
      console.log('------destoryed------')
    }
  }
</script>
