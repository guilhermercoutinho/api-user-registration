const getAvatarByGender = (gender, name) => {
  let url;
  if (gender === "masculino") {
    url = "https://avatar.iran.liara.run/public/boy";
  } else if (gender === "feminino") {
    url = "https://avatar.iran.liara.run/public/girl";
  } else {
    url = `https://avatar.iran.liara.run/username?username=${name}`;
  }

  return url;
};

export default getAvatarByGender;
