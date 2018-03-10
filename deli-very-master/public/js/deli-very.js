/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orderContainer',
  data: {
    orders: {},
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      socket.emit("addOrder", this.orders.T);
    },
    displayOrder: function (event){
      var offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };
      this.orders = { 
        'T' : {
          orderId: 'T',
          details: { 
            x: event.clientX - 10 - offset.x,
            y: event.clientY - 10 - offset.y 
          },
          orderItems: getBurgerName()
          personalInformation:{
            
          }
        }
      };
    }
  }
});
