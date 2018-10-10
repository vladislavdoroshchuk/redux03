export const getProfileInfo = ({ id, ...profileInfo }) => ({
  id,
  year: 0,
  name: profileInfo.name,
  login: profileInfo.login,
  company: profileInfo.company,
  location: profileInfo.location,
  following: profileInfo.following,
  followers: profileInfo.followers,
  avatar_url: profileInfo.avatar_url,
  public_repos: profileInfo.public_repos,
  bio: profileInfo.bio
});

export const fetchProfile = url => (
  fetch(url)
    .then(res => res.json())
    .then(getProfileInfo)
);
