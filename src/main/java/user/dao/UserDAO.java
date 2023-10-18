package user.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import user.bean.UserImageDTO;

@Mapper
public interface UserDAO {

	public void upload(List<UserImageDTO> userImageList);

	public List<UserImageDTO> getUploadList();

	public void delete(String filename);

	public UserImageDTO seleteByfilename(String filename);
	
}
