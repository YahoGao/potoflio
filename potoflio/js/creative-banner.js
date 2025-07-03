// CREATIVE DEVELOPER 横幅渲染
(function() {
  const text = 'CREATIVE DEVELOPER';
  const banner = document.createElement('div');
  banner.className = 'creative-banner';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      const star = document.createElement('img');
      star.src = 'img/STAR.svg';
      star.alt = '*';
      star.className = 'star';
      banner.appendChild(star);
    } else {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = text[i];
      banner.appendChild(span);
    }
  }
  // 插入上下各两条细线
  ['line1','line2','line3','line4'].forEach(cls => {
    const line = document.createElement('div');
    line.className = 'line ' + cls;
    banner.appendChild(line);
  });

  // 工具函数：生成一组二进制数字流DOM
  function createBinaryRow() {
    const binaryRow = document.createElement('div');
    binaryRow.className = 'binary-row';
    const groupCount = 4;
    const digitsPerGroup = 16;
    const groups = [];
    for (let g = 0; g < groupCount; g++) {
      const group = document.createElement('span');
      group.className = 'binary-group';
      for (let d = 0; d < digitsPerGroup; d++) {
        const digit = document.createElement('span');
        digit.textContent = Math.random() > 0.5 ? '1' : '0';
        group.appendChild(digit);
      }
      groups.push(group);
      binaryRow.appendChild(group);
      if (g < groupCount - 1) {
        const slash = document.createElement('span');
        slash.className = 'binary-slash';
        slash.textContent = '//////////////////////////////////////////////';
        binaryRow.appendChild(slash);
      }
    }
    return {binaryRow, groups};
  }

  // 插入两组数字流
  const {binaryRow: binaryRowTop, groups: groupsTop} = createBinaryRow();
  const {binaryRow: binaryRowBottom, groups: groupsBottom} = createBinaryRow();
  banner.appendChild(binaryRowTop);
  banner.appendChild(binaryRowBottom);

  // 定位：分别放到线1线2之间、线3线4之间
  binaryRowTop.style.top = '0';
  binaryRowTop.style.transform = 'translateY(-2.3em)';
  binaryRowBottom.style.bottom = '0';
  binaryRowBottom.style.transform = 'translateY(5.2em)';

  // 动态切换数字
  setInterval(() => {
    groupsTop.forEach(group => {
      Array.from(group.children).forEach(digit => {
        digit.textContent = Math.random() > 0.5 ? '1' : '0';
      });
    });
    groupsBottom.forEach(group => {
      Array.from(group.children).forEach(digit => {
        digit.textContent = Math.random() > 0.5 ? '1' : '0';
      });
    });
  }, 350);

  // 插入到打印机下方
  const typewriter = document.querySelector('.app-typewriter');
  if (typewriter) {
    typewriter.insertAdjacentElement('afterend', banner);
  }

  // --- 竖轴旋转动画 ---
  function getNonAdjacentRandomIndexes(len, count) {
    const idxs = [];
    let tries = 0;
    while (idxs.length < count && tries < 100) {
      const idx = Math.floor(Math.random() * len);
      if (
        idxs.includes(idx) ||
        idxs.includes(idx - 1) ||
        idxs.includes(idx + 1)
      ) {
        tries++;
        continue;
      }
      idxs.push(idx);
    }
    return idxs;
  }

  function animateLetters() {
    const letters = Array.from(banner.querySelectorAll('.letter'));
    const count = Math.floor(Math.random() * 3) + 1;
    const idxs = getNonAdjacentRandomIndexes(letters.length, count);
    idxs.forEach((idx, i) => {
      setTimeout(() => {
        const el = letters[idx];
        if (!el) return;
        el.classList.add('rotateY');
        el.addEventListener('animationend', function handler() {
          el.classList.remove('rotateY');
          el.removeEventListener('animationend', handler);
        });
      }, i * 120 + Math.random() * 80);
    });
    const nextDelay = 2000 + Math.random() * 2000;
    setTimeout(animateLetters, nextDelay);
  }
  setTimeout(animateLetters, 1200);
})();
