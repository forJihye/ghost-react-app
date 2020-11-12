import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "c3c2f3fdbe3d4ae162fa1bd21c",
  version: "v3"
});

export const getAllPosts = async() => await api.posts.browse({limit: 'all'});
export const getPosts = async({limit}) => await api.posts.browse({limit, include: 'tags'}).catch(err => console.error(err));

