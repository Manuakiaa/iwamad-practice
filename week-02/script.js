const likeBtn = document.querySelector('#like-btn');
const profileCard = document.querySelector('#profile-card');

likeBtn.addEventListener('click', () => {
  const isLiked = profileCard.classList.toggle('card-liked');
  likeBtn.innerHTML = isLiked ? '❤️ Liked' : '🤍 Like';
});