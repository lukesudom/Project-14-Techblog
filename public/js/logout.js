//Logout JS

const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Logout failed');
  }
};


//Click handlers

const logoutBtn = document.querySelector('#logout-link');
if (logoutBtn) {
  logoutBtn.addEventListener('click', logout);
}