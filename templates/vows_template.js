var vows = require('vows');
var assert = require('assert');

vows.describe('Checkout kata')
        .addBatch({
                'Test price of an apple': {
                        topic: function() {
                                return new Checkout();
                        },
                        'Returns 50': function(topic) {
                                topic.add('apple');
                                assert.equal(topic.total(), 50);
                        }
                },
                'Test price of a packet of biscuits': {
                        topic: function() {
                                return new Checkout();
                        },
                        'Returns 30': function (topic) {
                                topic.add('biscuit');
                                assert.equal(topic.total(), 30);
                        }
                },
        })
        .run();

var Checkout = function () {
        return {
                add: function (itemName) {
                        this.itemPrice(itemName);
                }
        };
};
