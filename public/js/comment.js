
//Comment JS


const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('#post-id').dataset.postId;
  const content = document.querySelector('textarea[name="comment-body"]').value;
  if (content) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_id: postId,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.location.reload();
  }
};


//On click handler

const commentBtn = document.querySelector('#comment-btn');
if (commentBtn) commentBtn.addEventListener('click', commentFormHandler);