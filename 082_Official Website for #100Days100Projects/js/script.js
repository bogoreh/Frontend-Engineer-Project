const App = () => {
const [projects, setProjects] = React.useState([]);

React.useEffect(() => {
    fetch('https://substantial-diascia.glitch.me/projects')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setProjects(res)
        })
}, []);

return ( <
    div className = "projects-container" > {
        projects.length > 0 ?
        projects.map(project => ( <
            div className = "project" >
            <
            img src = {
                project.img_url
            }
            alt = {
                project.name
            }
            /> <
            div className = "project-info" >
            <
            p > {
                project.description
            } < /p> <
            small >
            <
            strong > Tags: < /strong> {project.tags.map(tag => (<span>{tag} </span > ))
    } <
    /small> <
    div className = "btn-container" >
    <
    a href = "#" > See project < /a> <
    /div> <
    /div> <
    /div>
)): 'Loading projects'
} <
/div>
);
}


ReactDOM.render( < App / > , document.getElementById('app'));


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});