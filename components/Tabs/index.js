// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')


function createTab(obj) {
    const topicTab = document.createElement('div')

    topicTab.classList.add('tab')

    topicTab.textContent= obj;

    return topicTab

}

getMyData = () => {
axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then((res) => {
        const LambdaTopics = (res.data)

        console.log(LambdaTopics)

        res.data.topics.forEach((item) => {
        topics.appendChild(createTab(item))
    });

        createTab(LambdaTopics)
    })
    .catch((err) => {
        console.log(`You hit me mistaken`, err)
    })
}
getMyData()

