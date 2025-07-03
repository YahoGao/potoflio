 // 打字内容
const textList = [
    '测量显示与虚拟之间的距离',
    '如果它没坏 就不要修复它',
    '正在编制光与影的炼金术',
    '每一行代码 都是对未来的承诺'
  ];
  const typingEl = document.querySelector('.typing');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 120;
  const backSpeed = 30;
  
  function type() {
    const currentText = textList[textIndex];
    if (!isDeleting) {
      typingEl.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000); // 停顿1秒再删除
      } else {
        setTimeout(type, typeSpeed);
      }
    } else {
      typingEl.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textList.length;
        setTimeout(type, 500); // 停顿0.5秒再输入下一个
      } else {
        setTimeout(type, backSpeed);
      }
    }
  }
  document.addEventListener('DOMContentLoaded', type);
  