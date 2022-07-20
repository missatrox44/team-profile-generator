function generateHTML(data) {
  return `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <title>Team Profile Generator</title>
  </head>
  
  <body>

    <header>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
          <p class="lead">Meet your amazing team!</p>
        </div>
      </div>
    </header>

    <main class="d-flex justify-content-around">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${name} <br>
              Manager
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: <span>${id}</span></li>
              <li class="list-group-item">Email: <span>${email}</span></li>
              <li class="list-group-item">Office Number: <span>${officeNum}</span></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${name} <br>
              Engineer
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: <span>${id}</span></li>
              <li class="list-group-item">Email: <span>${email}</span></li>
              <li class="list-group-item">Github: <span>${github}</span></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${name} <br>
              Intern
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: <span>${id}</span></li>
              <li class="list-group-item">Email: <span>${email}</span></li>
              <li class="list-group-item">School: <span>${school}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    </main>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
  
  </body>
</html>

  `;
}

module.exports = generateHTML;