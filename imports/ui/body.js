import {Template} from 'meteor/templating';
import {Images} from '../api/images.js';

import './body.html';


Template.image.helpers({
	img: Images.find({},{sort: {rating: -1}})
});

Template.image.events({
	'click .js-del-img'(event){
		let img_id = this._id;
		$("#"+img_id).hide('slow', function(){
			Images.remove({"_id":img_id});	
		});
	},
	'click .starRate'(event){
		let rating = $(event.currentTarget).data('userrating');
		let img_id = this.id;
		console.log(rating);
		console.log(img_id);
		Images.update({"_id": img_id}, {$set: {rating: rating}});
	}
});