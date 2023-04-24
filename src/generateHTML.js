
const generateHTML = (employee) => {
    let newTeamMember = '';
    let teamCard = [];
    for (let i = 1; i < employee.length; i++) {
        switch (employee[i].getRole()) {
            case 'Engineer':
                newTeamMember += `

            <!-- Engineer team member card -->
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title text-center" id="name">${employee[i].name}</h3>
                        <h5 id="role" class="text-center"><i class="fas fa-user-ninja"></i> ${employee[i].getRole()}</h5>
                    </div>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="id">ID: ${employee[i].id}</li>
                        <li class="list-group-item" id="email"><a href="mailto:${employee[i].email}">
                            Email: ${employee[i].email}</a>
                            </li>
                        <li class="list-group-item" id="github"><a href="https://github.com/${employee[i].github}" target="_blank">Github: ${employee[i].github}</a></li>
                    </ul>
                </div>`;

                teamCard.push(newTeamMember)

                break;

            case 'Intern':
                newTeamMember += `   

            <!-- Intern team member card -->
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title text-center" id="name">${employee[i].name}</h3>
                    <h5 id="role" class="text-center"><i class="fas fa-user-graduate"></i> ${employee[i].getRole()}</h5>
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="id">ID: ${employee[i].id}</li>
                    <li class="list-group-item" id="email"><a href="mailto:${employee[i].email}">Email: ${employee[i].email}</a></li>
                    <li class="list-group-item" id="school">School: ${employee[i].school}</li>
                </ul>
            </div>`;

                teamCard.push(newTeamMember)

                break;

        }
    };


    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        
            <link rel="stylesheet" href="./style.css" />
            <script src="https://kit.fontawesome.com/3ff242710e.js" crossorigin="anonymous"></script>
            
            <title>Blue Team</title>
            </head>

            <body>
            
                <div id="jumbotron" class="jumbotron jumbotron-fluid">
                    <div class="container">
                    <h1 class="display-1">Blue Team</h1>
                </div>

                
                <div class="container" id="card-container">
                    <div class="row">
                        <div class="card-area col-12 d-flex justify-content-center mt-5">
                    
                            <div class="card text" style="width: 18rem;">
                                <div class="card-body">
                                    <h3 class="card-title text-center" id="name">${employee[0].name}</h3>
                                    <h5 id="role" class="text-center"><i class="fas fa-user-tie"></i> Manager</h5>
                                </div>
                            
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" id="id">ID: ${employee[0].id}</li>
                                    <li class="list-group-item" id="email"><a href="mailto:${employee[0].email}">
                                        Email: ${employee[0].email}</a>
                                    </li>
                                    <li class="list-group-item" id="officeNumber">
                                        Office Number: ${employee[0].officeNumber}
                                    </li>
                                </ul>

                            </div>

                            ${newTeamMember}
                        </div>
                    </div>
                </div>

                

            </body>

            </html>`;
};


module.exports = generateHTML;