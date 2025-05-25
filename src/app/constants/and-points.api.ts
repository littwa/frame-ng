export const EndPoint = {
  auth: {
    signInUser: 'users/sign-in',
    signUpUser: 'users/sign-up',
    getCurrentUser: 'users/get',
    signOutCurrentUser: 'users/sign-out',
    getRefresh: 'users/refresh',
    updateCurrentUser: 'users/up-date',
    getTest: 'users/get-test',
  },
  screenshot: {
    addList: 'screenshot/add-list',
    getLists: 'screenshot/get-lists',
    delList: 'screenshot/del-list', // /:id
    add: 'screenshot/add', // /:id
    get: 'screenshot/get-list', // /:id
  },
  //==========================================
  // users: {
  //   // $: 'users',
  //   get: 'users/get-users',
  //   getExt: 'users/get-users-ext',
  //   follow: 'users/follow',
  //   unfollow: 'users/unfollow',
  //   getById: 'users/get',
  //   getFollowersByUsersId: 'users/get-followers',
  //   getFollowingByUsersId: 'users/get-following',
  // },

  // wit: {
  //   addList: 'wit/add-list',
  //   addPhraseList: 'wit/add-phrase-list',
  //   delPhraseList: 'wit/del-phrase-list',
  //   delPhrasePermanently: 'wit/del-phrase-permanently',
  //   delListPermanently: 'wit/del-list-permanently',
  //   updatePhrase: 'wit/update-phrase',
  //   getLists: 'wit/get-lists',
  //   getList: 'wit/get-list',
  // },

  // compose: {
  //   addList: 'compose/add-compose-list',
  //   delList: 'compose/del-compose-list', // /:id
  //   add: 'compose/add-compose', // /:id
  //   del: 'compose/del-compose', // /:listId/:composeId
  //   update: 'compose/update-compose', // /:id
  //   getLists: 'compose/get-lists',
  //   getList: 'compose/get-list', // /:id
  // },
  // journal: {
  //   add: 'journal',
  //   update: 'journal',
  //   del: 'journal',
  //   get: 'journal',
  // },
  // code: 'code',
  // codeTypes: 'code/types',
  // codeTags: 'code/tags',
  // codeGetAllTags: 'code/tags-all',
};
