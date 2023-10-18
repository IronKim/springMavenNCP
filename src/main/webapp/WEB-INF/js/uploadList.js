$(function(){
	$.ajax({
		type: 'post',
		url: '/springMavenNCP/user/getUploadList',
		dataType: 'json',
		success: function(data){
			console.log(data)
			$.each(data, function(index, items){
				var result = `<tr>` +
						`<td align="center">` + items.seq + `</td>` +
						`<td align="center"><img src="https://kr.object.ncloudstorage.com/bitcamp-edu-bucket-92/storage/`+ items.imageFileName + `
						"alt="` +items.imageName+ `" style="width:70px;"> </td>` +
						`<td align="center">` + items.imageOriginalName + `</td>` +
						`<td align="center">` +
							`<button onclick="updateByfileName('` + items.imageFileName + `' )">수정</button>` +
							`<button onclick="deleteByfileName('` + items.imageFileName + `' )">삭제</button>` +
						`</td>`+
						`</tr>`;
				$('#listTable').append(result);
			})
		},
		error: function(e) {
			
		}
	})
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

function updateByfileName(filename){
	
	location.href='/springMavenNCP/user/updateForm?filename=' +filename;
	
}