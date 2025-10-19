marked.setOptions({

})

function App() {

    const [text, setText] = React.useState("");

    return [ <
        div className = "text-center px-4" >
        <
        h1 className = "py-4" > My Markdown Preview < /h1>   <textarea
        textarea name = "text"
        id = "text"
        rows = "10"
        value = {
            text
        }
        onChange(e => setText {
            e.target.value
        })
        className = "textarea" > < /textarea>  <
        h3 className = "nt-3" > Output < /h3>  <
        Preview markdown {
            text
        } >
        <
        /
        div >
    ];
}

function Preview(markdown) {
    return ( <
        div >

        dangerouslySetInnerHTML = ({
            __html: marked(markdown,
                (rendered: renderer
                }),
        }) id = "preview" <
        /div>
    )
}

ReactDom.rendet( < App / > , document.getElementById("root"));