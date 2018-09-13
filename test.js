const Jabr = require ( 'jabr' );

const store = Jabr();

store.on('login', x => {
    console.log(x)
})

store.login = false;

