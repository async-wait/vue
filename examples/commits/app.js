/* global Vue */

var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

/**
 * Actual demo
 */

var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}} {{message}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile({
  data: {
    message: 'test'
  }
}).$mount('#mount-point')

new Vue({

  el: '#demo',

  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    msg: 'ftj',
    test: '101010'
  },

  created: function () {
    this.fetchData()
  },

  computed: {
    name () {
      return this.msg;
    }
  },

  watch: {
    currentBranch: {
      immediate: true,
      handler: 'fetchData'
    }
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    changeName () {
      this.currentBranch = 'other master';
    },
    fetchData: function () {
      console.log('--------');
      
    }
  }
})
