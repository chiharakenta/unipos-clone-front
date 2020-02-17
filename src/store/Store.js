import { createStore } from 'redux';

const initdata = {
  posts: [],
  currentUser: {}
};


// レデューサー
export function peerReducer(state = initdata, action) {
  switch (action.type) {
    case 'SIGN_IN': {
      return signInReduce(state, action);
    }
    case 'SIGN_OUT': {
      return signOutReduce(state);
    }
    case 'SET_POINT': {
      return setPointReduce(state, action);
    }
    case 'SEND_POINT': {
      return sendPointReduce(state, action);
    }
    case 'READ_POSTS': {
      return readPostsReduce(state, action);
    }
    case 'CREATE_POSTS': {
      return createPostReduce(state, action);
    }
    case 'DELETE_POSTS': {
      return deletePostReduce(state, action);
    }
    case 'CLAP': {
      return clapReduce(state, action);
    }
    default: {
      return state;
    }
  }
}

// レデュースアクション

function readPostsReduce(state, action) {
  let newPosts = action.posts;
  return {
    posts: newPosts,
    currentUser: state.currentUser
  };
}

function createPostReduce(state, action) {
  let newPosts = state.posts.slice();
  newPosts.unshift(action.post);
  return {
    posts: newPosts,
    currentUser: state.currentUser
  };
}

function deletePostReduce(state, action) {
  let newPosts = state.posts.slice();
  for(let i in state.posts) {
    if (state.posts[i].id === action.post.id) {
      newPosts.splice(i, 1);
    }
  }
  return {
    posts: newPosts,
    currentUser: state.currentUser
  };
}

function signInReduce(state, action) {
  let currentUser = {
    id: action.id,
    name: action.name
  };
  return {
    posts: state.posts,
    currentUser: currentUser
  };
}

function signOutReduce(state) {
  return {
    posts: state.posts,
    currentUser: {}
  };
}

function setPointReduce(state, action) {
  let newUser = {
    id: state.currentUser.id,
    name: state.currentUser.name,
    point: action.point,
    received_point: action.received_point
  };
  return {
    posts: state.posts,
    currentUser: newUser
  };
}

function sendPointReduce(state, action) {
  let newPoint = state.currentUser.point - action.sendPoint;
  let newUser = {
    id: state.currentUser.id,
    name: state.currentUser.name,
    point: newPoint,
    received_point: state.currentUser.received_point
  };
  return {
    posts: state.posts,
    currentUser: newUser
  };
}

function clapReduce(state, action) {
  let newPosts = state.posts.slice();
  for (let i in newPosts) {
    if (newPosts[i].id === action.postId) {
      newPosts[i].claps++;
    }
  }
  return {
    posts: newPosts,
    currentUser: state.currentUser
  };
}

// アクションクリエーター

// ユーザー変更のアクション
export function signIn(user) {
  return {
    type: 'SIGN_IN',
    id: user.id,
    name: user.name
  };
}


export function signOut() {
  return {
    type: 'SIGN_OUT'
  };
}

export function setPoint(user) {
  return {
    type: 'SET_POINT',
    point: user.point,
    received_point: user.received_point
  };
}

export function receivePoint(point) {
  return {
    type: 'RECEIVE_POINT',
    receivePoint: point
  };
}

export function sendPoint(point) {
  return {
    type: 'SEND_POINT',
    sendPoint: point
  };
}

export function createUser(currentUser) {
  return {
    type: 'CREATE_USER',
    googleId: currentUser.dV,
    name: currentUser.Ad
  };
}

export function readPosts(posts) {
  return {
    type: 'READ_POSTS',
    posts: posts
  };
}

export function createPost(post) {
  return {
    type: 'CREATE_POSTS',
    post: post
  };
}

export function deletePost(post) {
  return {
    type: 'DELETE_POSTS',
    post: post
  };
}

export function clap(postId) {
  return {
    type: 'CLAP',
    postId: postId
  };
}

// ストアを作成
export default createStore(peerReducer);