console.log('before');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading user from database');
      resolve({ id: id, gitUserName: 'Chillbroh' });
    }, 2000);
  });
}

function getRepos(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching Github Repos');
      resolve(['repo1', 'repo2', 'repo3']);
    });
  });
}

//promise approch
getUser(1)
  .then((user) => getRepos(user.gitUserName))
  .then((repos) => console.log(repos))
  .catch((err) => console.log(err.message));

//async await approch
async function displayRepo() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.gitUserName);
    console.log(repos);
  } catch (err) {
    console.log(err.message);
  }
}

displayRepo();
console.log('after');
