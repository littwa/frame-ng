export const EndPoint = {
  auth: {
    signInUser: 'users/sign-in',
    signUpUser: 'users/sign-up',
    getCurrentUser: 'users/get',
    signOutCurrentUser: 'users/sign-out',
    getRefresh: 'users/refresh',
    updateCurrentUser: 'users/up-date',
    getTest: 'users/get-test',
    // verifyManger: 'users/admin/verify/',
    // verifyCustomer: 'users/customer/verify/',
    // logInManger: 'managers/log-in/',
    // verifyManger: 'managers/verify/',
    // getCurrentManger: 'managers/get/'
  },
  posts: {
    add: 'posts/add',
    update: 'posts/update',
    del: 'posts/delete',
    getMe: 'posts/me',
    getFollowing: 'posts/following',
    getFollowers: 'posts/followers',
    getAll: 'posts/all',
    getById: 'posts/post',
    me: 'me',
    following: 'following',
    followers: 'followers',
    all: 'all',
    like: 'posts/like',
    addComment: 'posts/add-comment',
    delComment: 'posts/del-comment',
  },
  comments: {
    like: 'comments/like',
    add: 'comments/add',
    del: 'comments/delete',
    update: 'comments/update',
  },
  users: {
    // $: 'users',
    get: 'users/get-users',
    getExt: 'users/get-users-ext',
    follow: 'users/follow',
    unfollow: 'users/unfollow',
    getById: 'users/get',
    getFollowersByUsersId: 'users/get-followers',
    getFollowingByUsersId: 'users/get-following',
  },
  products: {
    get: 'products',
    add: 'products/add',
    update: 'products/update',
    detail: 'products/detail',
  },

  wit: {
    addList: 'wit/add-list',
    addPhraseList: 'wit/add-phrase-list',
    delPhraseList: 'wit/del-phrase-list',
    delPhrasePermanently: 'wit/del-phrase-permanently',
    delListPermanently: 'wit/del-list-permanently',
    updatePhrase: 'wit/update-phrase',
    getLists: 'wit/get-lists',
    getList: 'wit/get-list',
  },
  chat: {
    getTicket: 'chat/get-ticket',
  },
  compose: {
    addList: 'compose/add-compose-list',
    delList: 'compose/del-compose-list', // /:id
    add: 'compose/add-compose', // /:id
    del: 'compose/del-compose', // /:listId/:composeId
    update: 'compose/update-compose', // /:id
    getLists: 'compose/get-lists',
    getList: 'compose/get-list', // /:id
  },
  journal: {
    add: 'journal',
    update: 'journal',
    del: 'journal',
    get: 'journal',
  },
  code: 'code',
  codeTypes: 'code/types',
  codeTags: 'code/tags',
  codeGetAllTags: 'code/tags-all',
};
