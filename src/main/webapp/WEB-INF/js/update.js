$(function(){
	$.ajax({
		type: 'get',
		url: '/springMavenNCP/user/seleteByfilename',
		data: 'filename=' + $('#filename').val(),
		dataType: 'json',
		success: function(data){
			console.log('aaa');
			console.log(data.seq);
			$('#imageName').val(data.imageName);
			$('#imageContent').val(data.imageContent);
			var newImage = $('<img>');
			newImage.attr('src', 'https://kr.object.ncloudstorage.com/bitcamp-edu-bucket-92/storage/' + data.imageFileName);
			newImage.attr('width', '70');      
			newImage.attr('height', '70'); 
			
			$('#showImgList').append(newImage);
			
			
			console.log(data);
		},
			error: function(e){
			console.log(e);
		}
			
	});
	
	$('#uploadBtn').click(function(){
		$('#imageNameDiv').empty();
		$('#imageContentDiv').empty();
		
		if($('#imageName').val() == '') {
			$('#imageNameDiv').text('상품명 입력');
			$('#imageName').focus();
			
		}else if ($('#imageContent').val() == '') {
			$('#imageContentDiv').text('상품 내용 입력');
			$('#imageContent').focus();
			
		}else {
			var formData = new FormData($('#uploadForm')[0]);
			
			$.ajax({
				type: 'post',
				enctype: 'multipart/form-data',
				processData: false,
				contentType: false,
				url:'/springMavenNCP/user/upload',
				data: formData,
				success: function(data){
					deleteByfileName($('#filename').val());
					location.href='/springMavenNCP/user/uploadList';
				},
				error: function(e){
					console.log(e);
			} 
		});
		
		}
	});
});

function deleteByfileName(filename){
	
	
	$.ajax({
		type: 'post',
		url: '/springMavenNCP/user/delete',
		data: {'filename': filename},
		dataType: 'json',
		success: function(data){
			location.reload();
			
		},
		error: function(e) {
			location.reload();
		}
	})
}