class App extends React.Component {
    state = {
        dogs: [],
        database: undefined,
        idx1: undefined,
        idx2: undefined
    };

    componentDidMount = () => {
        const database = firebase.database().ref('/dogs');

        this.setState({
                database
            },
            () => {
                this.getDogs();
            }
        );

        setTimeout(() => {
            this.getRandomDogs();
        }, 2000);
    };

    getDogs = () => {
        const {
            database
        } = this.state;

        database.on('value', snapshot => {
            const dogs = [];
            const dogsObj = snapshot.val();
            Object.keys(dogsObj).forEach(key => {
                dogs.push(dogsObj[key]);
            });

            this.setState({
                dogs
            });
        });
    };

    favoriteDog = id => {
        const {
            database,
            dogs
        } = this.state;
        const dog = dogs.find(d => d.id === id);

        // increase the likes
        database.child(id).update({
            likes: dog.likes + 1
        });
        this.getRandomDogs();
        this.getDogs();
    };

    getRandomDogs = () => {
        const {
            dogs
        } = this.state;

        if (!dogs) {
            return;
        }

        const idx1 = Math.floor(Math.random() * dogs.length);
        const idx2 = Math.floor(Math.random() * dogs.length);

        this.setState({
            idx1,
            idx2
        });
    };

    getMedal = idx => {
        switch (idx) {
            case 0:
                return ( <
                    p className = 'place place-1' >
                    <
                    i className = 'fas fa-medal' > < /i> <
                    /p>
                );
            case 1:
                return ( <
                    p className = 'place place-2' >
                    <
                    i className = 'fas fa-medal' > < /i> <
                    /p>
                );
            case 2:
                return ( <
                    p className = 'place place-3' >
                    <
                    i className = 'fas fa-medal' > < /i> <
                    /p>
                );
            default:
                return <p className = 'place' > {
                    idx + 1
                } < /p>;
        }
    };

    render() {
        const {
            dogs,
            idx1,
            idx2
        } = this.state;
        const dog1 = dogs[idx1];
        const dog2 = dogs[idx2];

        if (dogs.length === 0 || !idx1 || !idx2) return <h1 > Loading data... < /h1>;

        return ( <
            div className = 'main' >
            <
            h1 className = 'text-center' > Which one is your favorite ? < /h1> <
            div className = 'container text-center' >
            <
            div className = 'img-container' >
            <
            img src = {
                dog1.image
            }
            alt = '' / >
            <
            h3 className = 'name' > {
                dog1.name
            } < /h3> <
            button className = 'choose-btn'
            onClick = {
                () => this.favoriteDog(dog1.id)
            } >
            This!
            <
            /button> <
            /div> <
            h3 className = 'or' > OR < /h3> <
            div className = 'img-container' >
            <
            img src = {
                dog2.image
            }
            alt = '' / >
            <
            h3 className = 'name' > {
                dog2.name
            } < /h3> <
            button className = 'choose-btn'
            onClick = {
                () => this.favoriteDog(dog2.id)
            } >
            That!
            <
            /button> <
            /div> <
            /div> <
            h2 > Leaderboard - Top 10 < /h2> <
            table class = 'leaderboard' >
            <
            tbody > {
                dogs
                .sort((a, b) => b.likes - a.likes)
                .slice(0, 10)
                .map((dog, idx) => ( <
                    tr key = {
                        dog.id
                    } >
                    <
                    td > {
                        this.getMedal(idx)
                    } < /td> <
                    td >
                    <
                    img src = {
                        dog.image
                    }
                    alt = {
                        dog.id
                    }
                    /> <
                    /td> <
                    td className = 'name' > {
                        dog.name
                    } < /td> <
                    td > {
                        dog.likes
                    } < /td> <
                    /tr>
                ))
            } <
            /tbody> <
            /table> <
            /div>
        );
    }
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