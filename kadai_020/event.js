// HTMLが読み込まれてから実行されるようにする
document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('text');
    const button = document.getElementById('btn');
  
    button.addEventListener('click', () => {
      text.textContent = 'ボタンをクリックしました';
    });
  });