
    function sendMessage() {
      const input = document.getElementById('userInput');
      const chatBox = document.getElementById('chatBox');
      const message = input.value.trim();

      if (message === '') return;

      const userMsg = document.createElement('div');
      userMsg.classList.add('message', 'user');
      userMsg.innerHTML = `<p>${message}</p>`;
      chatBox.appendChild(userMsg);

      input.value = '';

      // Scroll to bottom
      chatBox.scrollTop = chatBox.scrollHeight;

      // Simulated AI reply
      setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.classList.add('message', 'ai');
        aiMsg.innerHTML = `<p>That's a great question! Let's explore more about  this concept.</p>`;
        chatBox.appendChild(aiMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1000);
    }
  