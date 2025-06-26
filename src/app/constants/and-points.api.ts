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
  regard: {
    add: 'regard/add-regard',
    get: 'regard/get-regards',
    getOne: 'regard/get-regard', // /:id
    delRegard: 'regard/del-regard', // /:id
    createAddText: 'regard/create-add-text', // /:id
    addFoundText: 'regard/add-text', //:textId/:regardId
    findTexts: 'regard/find-texts', // :content
    updateText: 'regard/update-text', // :id
    delText: 'regard/del-text', //:textId/:regardId/:idxText
    createQualify: 'regard/create-qualify', //:id
    checkQualify: 'regard/check-qualify', //:textId/:regardId/:qualifyId
    lapQualify: 'regard/lap-qualify', //:id
    resetTextQualify: 'regard/reset-text-qualify', //:textId/:regardId/:qualifyId
    markTextAsFinishQualify: 'regard/mark-text-qualify', //:id,
  },
  //==========================================

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
