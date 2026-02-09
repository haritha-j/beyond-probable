// Keyboard navigation shortcuts
document.addEventListener('keydown', function(e) {
  // Don't trigger if user is typing in an input field
  if (e.target.matches('input, textarea')) return;
  
  // Don't trigger if modifier keys are pressed (Ctrl, Cmd, Shift, Alt)
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
  
  const key = e.key.toLowerCase();
  
  switch(key) {
    case 'b':
      window.location.href = '/';
      break;
    case 'a':
      window.location.href = '/about.html';
      break;
    case 'r':
      window.open('/assets/resume.pdf', '_blank');
      break;
    case 'g':
      window.open('https://github.com/haritha-j', '_blank');
      break;
  }
});
