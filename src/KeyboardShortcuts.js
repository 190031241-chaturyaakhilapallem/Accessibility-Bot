import React from 'react';
import './KeyboardShortcuts.css';

const shortcuts = [
    { keys: "Alt+K", description: "KeyBoard Shortcuts" },
    { keys: "Ctrl+G", description: "Google" },
    { keys: "Ctrl+I", description: "Instagram" },
    { keys: "Ctrl+Y", description: "Twitter" },
    { keys: "Ctrl+Z", description: "Threads" },
    { keys: "Ctrl+J", description: "Jira" },
    { keys: "Ctrl+A", description: "Atlassian" },
    { keys: "Alt+G", description: "Github" },
    { keys: "Ctrl+V", description: "Vercel" },
    { keys: "Ctrl+L", description: "LinkedIn" },
    { keys: "Ctrl+F", description: "Facebook" },
    { keys: "Ctrl+Y", description: "Youtube" },
    { keys: "Ctrl+m", description: "Toggle Mode" },
    { keys: "Alt+L", description: "Language Selection" },
    { keys: "Ctrl+D", description: "Interactive Dictionary" },
    { keys: "Alt+S", description: "Speech to Text" },
    { keys: "Alt+N", description: "Text to Speech" },
    { keys: "Ctrl+M", description: "Text Summarization" },
    { keys: "Ctrl+P", description: "Paraphrasing" },
    { keys: "Alt+f", description: "Image to Text Conversion" },
    { keys: "Alt+P", description: "Navigate to Profile" },
    { keys: "Alt+H", description: "Navigate to Help" },
    { keys: "Alt+O", description: "Navigate to Home" },
    { keys: "Ctrl+Up Arrow", description: "Increase Font Size" },
    { keys: "Ctrl+Down Arrow", description: "Decrease Font Size" },
    { keys: "Ctrl+Shift+Up Arrow", description: "Increase Contrast" },
    { keys: "Ctrl+Shift+Down Arrow", description: "Decrease Contrast" }
];

const KeyboardShortcuts = () => {
    return (
        <div className="container">
            <h1>Keyboard Shortcuts</h1>
            <ul className="shortcuts-list">
                {shortcuts.map((shortcut, index) => (
                    <li key={index} className="shortcut-item">
                        <span className="shortcut-key">{shortcut.keys}</span> - <span className="description">{shortcut.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default KeyboardShortcuts;
