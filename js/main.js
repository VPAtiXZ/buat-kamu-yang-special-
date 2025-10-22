
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('💖 I LOVE YOUU SAYANGKU, EVERY LOVE STORY IS BEAUTIFUL, BUT OURS IS MY FAVORITE AND GET WELL SOON, MY LOVE. I MISS YOUR LAUGH').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};