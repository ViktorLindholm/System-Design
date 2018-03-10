/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orderContainer',
  data: {
    orders: {},
    orderId: 0,
  },
  methods: {
    getId: function (){
      this.orderId = this.orderId + 1;
      return this.orderId;
    },

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
          orderId: this.getId(),
          details: { 
            x: event.clientX - 10 - offset.x,
            y: event.clientY - 10 - offset.y 
          },
          orderItems: getBurgerName(),
          personalInformation: getPersonalInformation()  
        }
      };
    }
  }
});
