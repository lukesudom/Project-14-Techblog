const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#title-field').value.trim();
  const content = document.querySelector('#content-field').value.trim();

  if (!(title && content)) {
    alert('Please fill out all forms');
    return;
  }
  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  document.location.replace('/dashboard');
};



//Click handlers

document
  .querySelector('#submit-btn')
  .addEventListener('click', newFormHandler);