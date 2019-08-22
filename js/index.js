console.log('index.js is Connected!');

const url = 'https://api.github.com/users/lmasullo/repos';

// Make a request for a user with a given ID
axios
  .get(url)
  .then((response) => {
    // handle success
    console.log(response);
    console.log(response.data);

    const table = $('<table>');
    table.attr('class', 'table table-stripe');
    const thead = $('<thead>');
    thead.attr('class', 'thead-dark');
    const tr = $('<tr>');
    const th1 = $('<th scope="col">#</th>');
    const th2 = $('<th scope="col">Name</th>');

    tr.append(th1, th2);
    thead.append(tr);
    table.append(thead);

    const tbody = $('<tbody>');
    const th = $('<th scope="row">');
    const td = $('<td>');

    response.data.forEach((element, index) => {
      console.log(element.name);
      const row = $(`
      <tr>
        <td>${index + 1}</td>
        <td><a target="_blank" href="${element.html_url}">${element.name}</a></td>
      </tr>`);
      tbody.append(row);
    });
    table.append(tbody);
    $('#repoList').append(table);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });

//
