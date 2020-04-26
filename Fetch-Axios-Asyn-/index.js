const urlAPI = 'https://jsonplaceholder.typicode.com'

// READ
const getAll = () => {
    axios.get(`${urlAPI}/posts`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}
    const getOne = (id) => {
        axios.get(`${urlAPI}/posts/${id}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

// CREATE
const createPost = (title, body, userId) => {
    axios({
        url : `${urlAPI}/posts`,
        method : "POST",
        data : {
            title,
            body,
            userId
        }
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err); 
    })
}

// DELETE
const deleteOne = (id) => {
    axios({
        url : `${urlAPI}/posts/${id}`,
        method : "DELETE"
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}
// deleteOne(2);

// UPDATE
const updatePost = (id, title, body, userId) => {
    axios({
        url : `${urlAPI}/posts/${id}`,
        method : "PUT",
        data : {
            id,
            title,
            body,
            userId
        }
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err); 
    })
}
getOne(2);
updatePost(2, "Something" , "Something" , 2);

/* ----------------------------------------------------- */

// async fuction
/* Function Biasa
async function getAll() {

}
*/

const tableData = document.getElementById('posts-table')
const getAll = async () => {
    try {
        const res = await axios.get(`${urlAPI}/posts`)

        res.data.slice(0, 10).map(item => {
            tableData.innerHTML += `
        <tr>
            <th scope="row">${item.id}</th>           
            <td>${item.title}</td>
            <td>${item.body}</td>
            <td>${item.userId}</td>
        </tr>
        `
        })
    } catch (err) {
        console.log("GET ERROR !");
    }
};

getAll();

const getOne = (id) => {
        axios.get(`${urlAPI}/posts/${id}`)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        
        }