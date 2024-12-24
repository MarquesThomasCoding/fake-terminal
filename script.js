const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalResults = document.getElementById('terminal-results');

terminalInput.focus();

terminalInput.addEventListener("input", function() {
    const inputText = this.value.trim(); // Récupère la valeur de l'input
    const words = inputText.split(" "); // Sépare les mots par des espaces

    if (words.length > 0) {
        // Le premier mot avec la classe CSS pour la couleur
        const firstWord = `<span class="terminal-command">${words[0]}</span>`;
        // Reconstitue le reste du texte
        const restOfText = `<span>${words.slice(1).join(" ")}</span>`;

        // Met à jour l'affichage avec le premier mot coloré
        terminalOutput.innerHTML = firstWord + " " + restOfText;
    } else {
        // Si le champ est vide, on efface le texte affiché
        terminalOutput.innerHTML = "";
    }
});



// "Entrée" exécutera la commande
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.trim();
        const command = input.split(' ')[0];
        const rest = input.slice(command.length).trim();
        terminalInput.value = '';
        terminalOutput.innerHTML = '';
        terminalResults.innerHTML += `<span class="terminal-location">root@fake-terminal:~$ <span class="terminal-hour">${new Date().toLocaleString()}</span></span> <span><i class="fa-solid fa-arrow-right-long"></i><span class="terminal-command">${input.split(' ')[0]}</span> ${input.slice(command.length).trim()}</span>`;
        terminalInput.focus();

        // Exécution de la commande
        switch (command) {
            case 'help':
                terminalResults.innerHTML += `
                    <span class="terminal-command">help</span> - show this help<br>
                    <span class="terminal-command">clear</span> - clear the terminal<br>
                    <span class="terminal-command">echo</span> - print the input<br>
                    <span class="terminal-command">date</span> - show the current date and time<br>
                    <span class="terminal-command">work</span> - list my work experiences<br>
                    <span class="terminal-command">school</span> - list my school formations<br>
                `;
                break;
            case 'clear':
            case 'cls':
                terminalResults.innerHTML = '';
                break;
            case 'echo':
                terminalResults.innerHTML += rest + "<br>";
                break;
            case 'date':
                terminalResults.innerHTML += 'Today date is: ' + new Date().toLocaleString() + "<br>";
                break;
            case 'work':
                terminalResults.innerHTML += `
                september 2024 - present: web developer at <a href="https://www.dynseo.com" target="_blank">DYNSEO</a>
                july 2024 - august 2024: web developer at <a href="https://www.dynseo.com" target="_blank">DYNSEO</a>
                june 2024: web developer at <a href="https://www.natos.fr" target="_blank">NATOS</a>
                `;
                break;
            case 'school':
                terminalResults.innerHTML += `
                february 2023 - present: Bachelor's degree in computer science at <a href="https://www.iim.fr" target="_blank">IIM</a>
                september 2022 - january 2023: 1st semester at engineering school <a href="https://www.esilv.fr" target="_blank">ESILV</a>
                september 2019 - july 2022: Baccalauréat at <a href="https://www.lyc-galois-sartrouville.ac-versailles.fr/" target="_blank">Lycée Evariste Galois</a>
                `
                break;
            case 'projects':
                terminalResults.innerHTML += `
                    <span>Here are some of my projects:</span>
                    <span><a href="https://www.google.com" target="_blank">Project 1</a></span>
                    <span><a href="https://www.google.com" target="_blank">Project 2</a></span>
                    <span><a href="https://www.google.com" target="_blank">Project 3</a></span>
                `;
                break;
            case 'contact':
                terminalResults.innerHTML += `
                    <span>Email: <a href="mailto:thomasmarques.lucky@gmail.com">thomasmarques.lucky@gmail.com</a></span>
                    <span>LinkedIn: <a href="https://www.linkedin.com/in/marquesthomas/" target="_blank">Thomas Marques</a></span>
                    <span>GitHub: <a href="https://www.github.com/MarquesThomasCoding" target="_blank">MarquesThomasCoding</a></span>
                `
                break;
            case 'cv':
                terminalResults.innerHTML += `
                    <span>Hello, I'm a web developer and I'm currently looking for a job. You can find my resume <a href="https://www.google.com" target="_blank">here</a></span>
                `;
                break;
            case 'exit':
                window.close();
                break;
            default:
                terminalResults.innerHTML += `<span class="terminal-error">${command}: command not found</span>`;
                break;
        }
        document.querySelector('section').scrollTop = document.querySelector('main').scrollHeight;
    }
});