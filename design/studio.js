const dialog = document.querySelector('#bot-dialog');
const closeButton = dialog.querySelector('.close-dialog');
let opener;
document.querySelectorAll('[data-open-bot]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    dialog.showModal();
    document.body.classList.add('dialog-open');
    closeButton.focus();
  });
});
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  opener?.focus();
});
const samples = {
  work: 'Bhavani’s selected work includes Loft, a natural language to workflow compiler; Document Intelligence, with structured extraction and human review; and a tool-augmented conversational assistant for enterprise data. Explore the selected work section for more detail.',
  loft: 'Loft converts natural language requests into deterministic DAG execution plans using a planner–executor architecture with LangGraph. The existing portfolio reports enterprise integration time falling from four weeks to less than half a day in internal evaluation.',
  contact: 'You can email Bhavani at yeleswarapushankar@gmail.com or connect on LinkedIn at linkedin.com/in/ybs010. His resume is linked in the About and Contact sections.'
};
document.querySelectorAll('[data-question]').forEach(button => {
  button.addEventListener('click', () => {
    const log = document.querySelector('#conversation');
    // Keep this preview finite; choosing a question replaces the last sample.
    log.replaceChildren();
    [['you', 'YOU', button.textContent], ['assistant', 'BHAVANI’S AI / SCRIPTED SAMPLE', samples[button.dataset.question]]].forEach(([role, label, content]) => {
      const message = document.createElement('div');
      message.className = `message ${role}`;
      const heading = document.createElement('span');
      heading.textContent = label;
      const paragraph = document.createElement('p');
      paragraph.textContent = content;
      message.append(heading, paragraph);
      log.append(message);
    });
    log.scrollTop = log.scrollHeight;
  });
});
