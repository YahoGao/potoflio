document.addEventListener('DOMContentLoaded', function() {
  var keyboard = document.querySelector('.macbook .keyboard');
  if (keyboard) {
    // 生成普通按键
    for (let i = 0; i < 48; i++) {
      const key = document.createElement('div');
      key.className = 'key';
      keyboard.appendChild(key);
    }
    // 生成空格键
    const space = document.createElement('div');
    space.className = 'key space';
    keyboard.appendChild(space);
    // 生成f类按键
    for (let i = 0; i < 16; i++) {
      const keyf = document.createElement('div');
      keyf.className = 'key f';
      keyboard.appendChild(keyf);
    }
  }

  // 随机设置屏幕图片
  var display = document.querySelector('.macbook .display');
  if (display) {
    var imgs = ['img/td.svg', 'img/u3d.svg', 'img/ue.svg'];
    var idx = Math.floor(Math.random() * imgs.length);
    display.style.background = `url('${imgs[idx]}') no-repeat center center #000`;
    display.style.backgroundSize = '100% 100%';
  }
}); 