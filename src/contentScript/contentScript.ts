// TODO: content script
import './styles.css';
setTimeout(() => {
  const nodes = Array.from(document.querySelectorAll('[lang="en"][dir="auto"]'));
  // nodes.forEach((node: Element) => node.setAttribute('style', 'background-color: red!important',));
  // alert(document.querySelectorAll('[lang="en"][dir="auto"]').length)
  Array.from(document.querySelectorAll('[data-testid="tweet"]')).forEach(node => node.setAttribute('style', 'overflow: visible;'));
  Array.from(document.querySelectorAll('[data-testid="sidebarColumn"]')).forEach(node => node.setAttribute('style', 'margin-left: 100px'));

  nodes.forEach((node, index) => {
    const animatonNode = document.createElement('div');
    animatonNode.style.width = '50px';
    animatonNode.style.height = '50px';
    animatonNode.style.position = 'absolute';
    animatonNode.style.right = '-78px';
    animatonNode.style.top = '0px';
    // animatonNode.style.backgroundColor = 'red';
    animatonNode.innerHTML = `
      <div class="face-wrapper">
          <div id="eyes" class="case${index % 5 + 1}">
            <div class="eyebrow left"></div>
            <div class="eye left">
              <div class="eyelid"></div>
            </div>
            <div class="bottomlid left"></div>
            <div class="eyebrow right"></div>
            <div class="eye right">
              <div class="eyelid"></div>
            </div>
              <div class="bottomlid right"></div>
            
        </div>
        <div id="mouth" class="case${index % 5 + 1}">
          <div id="mouth-open"></div>
        </div>
         <div id="face-bg" class="case${index % 5 + 1}">
         <div class="face-light"></div>
        </div>
      </div>
      </div>
  `;
    node.appendChild(animatonNode)
  })
  document.onscroll = () => {
    const newnodes = Array.from(document.querySelectorAll('[lang="en"][dir="auto"]'));
    // newnodes.forEach(node => node.setAttribute('style', 'background-color: blue!important'))
    Array.from(document.querySelectorAll('[data-testid="sidebarColumn"]')).forEach(node => node.setAttribute('style', 'margin-left: 100px'));

    Array.from(document.querySelectorAll('[data-testid="tweet"]')).forEach(node => node.setAttribute('style', 'overflow: visible;'));
    newnodes.forEach((node, index) => {
      if(nodes.includes(node)) return;
      const animatonNode = document.createElement('div');
      animatonNode.style.width = '50px';
      animatonNode.style.height = '50px';
      animatonNode.style.position = 'absolute';
      animatonNode.style.right = '-78px';
      animatonNode.style.top = '0px';
      // animatonNode.style.backgroundColor = 'red';
      animatonNode.innerHTML = `
      <div class="face-wrapper">
          <div id="eyes" class="case${index % 5 + 1}">
            <div class="eyebrow left"></div>
            <div class="eye left">
              <div class="eyelid"></div>
            </div>
            <div class="bottomlid left"></div>
            <div class="eyebrow right"></div>
            <div class="eye right">
              <div class="eyelid"></div>
            </div>
              <div class="bottomlid right"></div>
            
        </div>
        <div id="mouth" class="case${index % 5 + 1}">
          <div id="mouth-open"></div>
        </div>
         <div id="face-bg" class="case${index % 5 + 1}">
         <div class="face-light"></div>
        </div>
      </div>
      </div>
  `;
      node.appendChild(animatonNode)
    })
  }
}, 2000)

