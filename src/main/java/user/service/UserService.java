package user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import user.bean.UserImageDTO;

@Service
public interface UserService {

	public void upload(List<UserImageDTO> userImageList);

	public List<UserImageDTO> getUploadList();

	public void delete(String filename);

	public UserImageDTO seleteByfilename(String filename);
}
