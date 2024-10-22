let likeCount = 0;

document.getElementById('likeButton').addEventListener('click', function() {
    likeCount++;
    document.getElementById('likeCount').textContent = likeCount + ' Likes';
});

// Comment like functionality
const commentLikeButtons = document.querySelectorAll('.comment-like-button');
const commentLikeCounts = document.querySelectorAll('.comment-like-count');

commentLikeButtons.forEach((button, index) => {
    let commentLikeCount = 0;
    button.addEventListener('click', function() {
        commentLikeCount++;
        commentLikeCounts[index].textContent = commentLikeCount + ' Likes';
    });
});

// Reply functionality
const replyButtons = document.querySelectorAll('.reply-button');
const submitReplyButtons = document.querySelectorAll('.submit-reply');

replyButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const replyInput = button.nextElementSibling;
        replyInput.style.display = replyInput.style.display === 'none' ? 'block' : 'none';
    });
});

submitReplyButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const replyText = button.previousElementSibling.value;
        if (replyText) {
            const repliesContainer = button.closest('.comment').querySelector('.replies');
            const replyElement = document.createElement('div');
            replyElement.textContent = replyText;
            repliesContainer.appendChild(replyElement);
            button.previousElementSibling.value = ''; // Clear the input
        }
    });
});