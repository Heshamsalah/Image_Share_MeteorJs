import {Template} from 'meteor/templating';
import {Images} from '../api/images.js';

import './otherstuff.html';

Template.other.helpers({
	imgcnt(){
		return Images.find().count();
	}
});