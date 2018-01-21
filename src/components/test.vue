<template>
    <div>
        {{params}}
      <div style="width: 100px;height:1000px;background: bisque;">
        1
      </div>
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
      for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
          console.log(i)
        }, 0)
      }
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
