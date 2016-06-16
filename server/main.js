import '../imports/api/images.js';
import {Images} from '../imports/api/images.js';


Meteor.startup(function() {
	if(Images.find().count() == 0)
	{
		for (var i=1; i<23; i++)
		{
			Images.insert({
				imgsrc: "img_"+i+".jpg",
				imgalt: "image "+i
			});
		}
	}
});

