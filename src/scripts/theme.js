// Theme management
export function initTheme() {
    const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    })();
    
    document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update terminal visibility
    const terminal = document.querySelector('.terminal-input');
    if (terminal) {
        terminal.style.display = isDark ? 'flex' : 'none';
    }
}

export function handleTerminalCommand(command) {
    const outputDiv = document.getElementById('terminalOutput');
    if (!outputDiv) return;

    const createOutputLine = (text, type = 'output') => {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.textContent = text;
        return line;
    };

    switch(command.toLowerCase().trim()) {
        case 'help':
            outputDiv.appendChild(createOutputLine('Available commands:'));
            outputDiv.appendChild(createOutputLine('  help     - Show this help message'));
            outputDiv.appendChild(createOutputLine('  about    - View about page'));
            outputDiv.appendChild(createOutputLine('  projects - View projects'));
            outputDiv.appendChild(createOutputLine('  contact  - View contact info'));
            outputDiv.appendChild(createOutputLine('  clear    - Clear terminal output'));
            break;
            
        case 'about':
            window.location.href = '/about';
            break;
            
        case 'projects':
            outputDiv.appendChild(createOutputLine('Navigating to projects section...'));
            // Add your projects navigation logic here
            break;
            
        case 'contact':
            outputDiv.appendChild(createOutputLine('Contact Information:'));
            outputDiv.appendChild(createOutputLine('  Email: your.email@example.com'));
            outputDiv.appendChild(createOutputLine('  GitHub: github.com/yourusername'));
            outputDiv.appendChild(createOutputLine('  LinkedIn: linkedin.com/in/yourusername'));
            break;
            
        case 'clear':
            outputDiv.innerHTML = '';
            break;
            
        default:
            outputDiv.appendChild(createOutputLine(`Command not found: ${command}`, 'error'));
            outputDiv.appendChild(createOutputLine('Type "help" for available commands.'));
    }

    // Scroll to bottom
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
