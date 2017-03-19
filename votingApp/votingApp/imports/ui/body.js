/**
 * Created by warmab on 3/18/17.
 */
import { Template } from 'meteor/templating';

import  Items  from '../api/items.js';

import './body.html';

Template.body.helpers({
  items(){
      return Items.find({});
  }
});

Template.body.events({
    'click .test'(event){
        console.log("Hello this is the click");
    }
})