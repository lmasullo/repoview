console.log('index.js is Connected!');

//const url = 'https://api.github.com/users/lmasullo/repos';
const url = 'https://api.github.com/graphql';
// let queryRepos = query($number_of_repos:3) {
//   viewer {
//     name
//      repositories(last: $number_of_repos) {
//        nodes {
//          name
//        }
//      }
//    }
// }

// axios({
//   method: 'get',
//   url: url,
//   auth: {
//     username: 'lmasullo',
//     password: 'Laxman27!'
//   }
// })



// const auth = {username: 'lmasullo', password: 'Laxman27!'};
// const githubUrl = 'https://api.github.com/graphql';
// fetchRepos(name, repo){
//   return axios.post(githubUrl, {
//     query: {
//   viewer {
//     name
//      repositories(last: 3) {
//        nodes {
//          name, id
//        }
//      }
//    }
// }
//   }, {headers: auth});
// }

// axios({
//   url: 'https://1jzxrj179.lp.gql.zone/graphql',
//   method: 'post',
//   data: {
//     query: `
//       query PostsForAuthor {
//         author(id: 1) {
//           firstName
//             posts {
//               title
//               votes
//             }
//           }
//         }
//       `
//   }
// }).then((result) => {
//   console.log(result.data)
// });

// data: { query: `
      
//         name
//          repositories(last: 5) {
//            nodes {
//              name, id
//            }
//          }
       
//       `
//     },

// Make a request for a user with a given ID
//axios
  //.get(url)
  axios({
    method: 'post',
    url: url,
    //use env
    auth: {
      username: 'lmasullo',
      password: 'Laxman27!'
    },
    data: {
      query: `{
        viewer {
          name
           repositories(first: 100) {
             nodes {
               name, id, url, isPrivate
             }
           }
         }
      }`
    }
    
  })
  .then(response => {
    // handle success
    console.log(response);
    console.log(response.data);
    console.log(response.data.data.viewer);
    console.log(response.data.data.viewer.repositories.nodes);
    const repos = response.data.data.viewer.repositories.nodes;

    $("#name").html(response.data.data.viewer.name)

    const table = $('<table>');
    table.attr('class', 'table table-stripe');
    const thead = $('<thead>');
    thead.attr('class', 'thead-dark');
    const tr = $('<tr>');
    const th1 = $('<th scope="col">#</th>');
    const th2 = $('<th scope="col">Name</th>');
    const th3 = $('<th scope="col">Private</th>');

    tr.append(th1, th2, th3);
    thead.append(tr);
    table.append(thead);

    const tbody = $('<tbody>');
    const th = $('<th scope="row">');
    const td = $('<td>');

    repos.forEach((element, index) => {
      console.log(element.name);
      const row = $(`
      <tr>
        <td>${index + 1}</td>
        <td><a target="_blank" href="${element.url}">${
        element.name
      }</a></td>
      <td>${element.isPrivate}</td>
      </tr>`);
      tbody.append(row);
    });
    table.append(tbody);
    $('#repoList').append(table);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });

//
