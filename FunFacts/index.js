function Facts(){
    return (
        <div>
            <img src="./hairstyle.png" width="40px"/>
        <nav>
        <h1> Fun facts about me</h1>
            <ul> 
                <li>I am crazy about Kitesurfing </li>
                <li>I once shared a home with 37 people</li>
            </ul>
        </nav>
        </div>
    )
}

ReactDOM.render(
    <div>
    <Facts />
    </div>, document.getElementById("root"));