import { Meteor } from 'meteor/meteor';
import '../imports/api/items.js';
Meteor.startup(() => {
  // code to run on server at startup
    console.log("Hello World");
});
