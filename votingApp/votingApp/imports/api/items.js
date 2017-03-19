import { Mongo } from 'meteor/mongo';

const Items = new Mongo.Collection('items');
export default Items;
//use export default to use as a variable