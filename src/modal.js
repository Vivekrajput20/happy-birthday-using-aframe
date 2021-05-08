window.addEventListener('load', () => {
  const createBtn = document.querySelector('#create-btn');
  const closeBtn = document.querySelector('#close-btn');
  const createTrigger = document.querySelector('#create-trigger');

  createTrigger.addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'block';
  });
  closeBtn.addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'none';
  });

  createBtn.addEventListener('click', () => {
    createBtn.setAttribute('disabled', true);
    createBtn.innerHTML = '<div class="loader"></div><span>creating</span>';
    let alertDiv = document.querySelector('#custom-alert-div');
    if (alertDiv) alertDiv.remove();
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const backgroundSound = document.querySelector('#background-sound').value;
    const video1 = document.querySelector('#video1').value;
    const video2 = document.querySelector('#video2').value;
    const video3 = document.querySelector('#video3').value;
    const video4 = document.querySelector('#video4').value;
    const video5 = document.querySelector('#video5').value;
    const video6 = document.querySelector('#video6').value;
    const url = new URL(window.location.origin);
    if (name) url.searchParams.append('name', name);
    if (age) url.searchParams.append('age', age);
    if (backgroundSound) url.searchParams.append('background-sound', backgroundSound);
    if (video1) url.searchParams.append('video1', video1);
    if (video2) url.searchParams.append('video2', video2);
    if (video3) url.searchParams.append('video3', video3);
    if (video4) url.searchParams.append('video4', video4);
    if (video5) url.searchParams.append('video5', video5);
    if (video6) url.searchParams.append('video6', video6);
    const generatedLink = document.createElement('a');
    generatedLink.setAttribute('href', url.href);
    generatedLink.setAttribute('target', '_blank');
    generatedLink.innerText = 'check it out!';
    const textSpan = document.createElement('span');
    textSpan.innerText = 'Scene successfully created - ';
    alertDiv = document.createElement('div');
    alertDiv.setAttribute('id', 'custom-alert-div');
    alertDiv.appendChild(textSpan);
    alertDiv.appendChild(generatedLink);
    window.setTimeout(() => {
      createBtn.parentNode.appendChild(alertDiv);
      createBtn.removeAttribute('disabled');
      createBtn.innerText = 'create';
    }, 1000);
  });
});
