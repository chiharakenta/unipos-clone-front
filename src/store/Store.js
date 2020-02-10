import { createStore } from 'redux';

const initdata = {
  isSignedIn: null,
  posts: [
    {
      id: 1,
      message: 'fuga',
      created_at: '2020-01-24T03:24:04.025Z',
      updated_at: '2020-01-24T03:24:04.025Z'
    }
  ],
  claps: []
};


// レデューサー
export function peerReducer(state = initdata, action) {
  switch (action.type) {
    case 'SIGN_IN': {
      return signInReduce(state, action);
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
    isSignedIn: state.isSignedIn
  }
}

function createPostReduce(state, action) {
  let newPosts = this.props.posts.unshift(action.post);
  return {
    posts: newPosts,
    isSignedIn: state.isSignedIn
  }
}

function deletePostReduce(state, action) {
  let newPosts = [];
  for(let i in this.props.posts) {
    if (this.props.posts[i].id != action.post.id) {
      newPosts.unshift(this.props.posts[i].id);
    }
  }
  return {
    posts: newPosts,
    isSignedIn: state.isSignedIn
  }
}

function signInReduce(state, action) {
  let newSignedIn = action.isSignedIn;
  return {
    posts: state.posts,
    isSignedIn: newSignedIn
  }
}

// アクションクリエーター

// ユーザー変更のアクション
export function signIn(isSignedIn) {
  return {
    type: 'SIGN_IN',
    isSignedIn: isSignedIn
  }
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

// ストアを作成
export default createStore(peerReducer);