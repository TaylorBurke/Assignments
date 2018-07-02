
const header = React.createElement("h1", {id: "header"}, 
    React.createElement("h1", {}, "Title"));
const content = React.createElement("section", {class: "content-wrapper"},
    React.createElement("h1", {}, "Blog Title"));
const app = React.createElement("div", {id: "wrapper"}, [header, content] );
ReactDOM.render(app, document.getElementById("root"))


// JSX syntax below:

// const app =
//     <div>
//         <header>
//                 <h1>Hey</h1>
//             <section>
//                     <h3>
//                         Blog Title
//                     </h3>
//             </section>
//         </header>
//     </div>

ReactDOM.render(app, document.getElementById("root"))