;(function(exp){

	var cv;
	cv = require('opencv');
	cv.readImage(__dirname + '../image.jpg', function(error, image) {
		image.detectObject(cv.FACE_CASCADE, {}, function(error, faces){
			var i = 0,
				len = faces.length,
				face;
			for(i; i < len; i += 1) {
				face = faces[i];
				image.ellipse(face.x + face.width/2, face.y + face.height/2, face.width/2, face.height/2);
			}
			image.save('./out.jpg');
		});
	});


}(exports));


