/**
 * Created by warmab on 3/18/17.
 */
import { Template } from 'meteor/templating';
import './item.html';

import  Items  from '../api/items.js';

Template.item.events({
    'click .vote-one'(event){
        Items.update(this._id, {
            $set: {'itemOne.value': this.itemOne.value + 1}
        });
    },
    'click .vote-two'(event){
        console.log(this._id);
        Items.update(this._id, {
            $set: {'itemTwo.value': this.itemTwo.value + 1}
        })
    }
});