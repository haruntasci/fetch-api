const fetchData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function renderUsers() {
    let users = await fetchData();
    let html = '';
    users.results.forEach(user => {
        let htmlSegment = `<div class="row justify-content-md-center bg-info">
                              <div class="col-4 bg-light  p-4 m-2 text-center">
                                <img src="${user.picture.large}">
                                <h1 class="display-6">${user.name.title}. ${user.name.first} ${user.name.last}</h1>
                                <div >${user.location.country}</div>
                                <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                              </div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();