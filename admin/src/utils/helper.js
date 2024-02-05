// upload image to cloudinary

// upload images
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "gzbuxpwt");
  const url = "http://api.cloudinary.com/v1_1/dlsiabgiw/image/upload";

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.secure_url;
  return response.data.secure_url;
};
