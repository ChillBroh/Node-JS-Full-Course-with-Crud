console.log('before');
getUser(1, (user) => {
  console.log('User', user);

  //get repos
  getRepos(user.gitUserName, (repos) => {
    console.log('Repos : ', repos);
  });
});
//this can lead to call back hell
console.log('after');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading user from database');
    callback({ id: id, gitUserName: 'Chillbroh' });
  }, 2000);
}

function getRepos(userName, callback) {
  setTimeout(() => {
    console.log('Fetching Github Repos');
    callback(['repo1', 'repo2', 'repo3']);
  });
}
