// Promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error))
;

// Async Await
// async defines function as asynchronous and allows to use await in funct. body
const myAsyncFunction = async () => {

    try {
        // Execution will pause until user response is fetched
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        // Since userResponse is a promise need to await as well until it is resolved
        const users = await userResponse.json();
        const userOne = users[1];

        console.log(userOne)

        const posts = await fetch('https://dsonplaceholder.typicode.com/posts?userId=' + userOne.id);
        const postsJson = await posts.json();

        console.log(postsJson);
    } catch (error) {
        console.log(error);
    }
}

myAsyncFunction().then(() => {});