// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [dog, setDog] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setDog(data.message)
            setLoaded(true);
        })
    }, []);
    if (!loaded) return <p>Loading...</p>;
    return (
        <img src={dog} alt={'A Random Dog'}/>
    )
}

export default App;