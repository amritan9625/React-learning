const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div", {id: "child"}, 
        React.createElement("h1", {}, "Hello, I am a h1 ")
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
console.log(parent)
