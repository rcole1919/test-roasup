Vue.component('nav-item', {
  props: ['add'],
  template: '#section'
});

Vue.component('message', {
  props: {
    add: {
      type: Object
    },
    index: Number
  },
  template: '#message'
});

var nav = new Vue({
  el: '#nav',
  data: {
    sections: [
      {name: 'My Questions', count: 85},
      {name: 'Messenger', count: 911},
      {name: 'Community QA', count: 1185},
      {name: 'FAQ', count: ''}
    ]
  },
  methods: {
    addSection: function () {
      const newItem = {
        name: 'New section',
        count: ''
      };
      this.sections.push(newItem);
    }
  }
});

var messagesBlock = new Vue({
  el: '#messages',
  data() {
    return {
        messages: [],
        title: ''
    }
  },
  methods: {
    addMessage: function () {
      if (this.title.trim()) {
        const newMessage = {
          text: this.title,
          hours: new Date().getHours(),
          minutes: new Date().getMinutes()
        };
        this.messages.push(newMessage);
        this.title = '';
      }
    }
  }
});