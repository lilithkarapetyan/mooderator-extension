export const setContentVisible = () => {
  Array.from(document.querySelectorAll('[data-testid="tweet"]')).forEach(node => node.setAttribute('style', 'overflow: visible;'));
}

export const getNodes = () => {
  return Array.from(document.querySelectorAll('[lang="en"][dir="auto"]'));
}

export const shiftSidebar = () => {
  Array.from(document.querySelectorAll('[data-testid="sidebarColumn"]')).forEach(node => node.setAttribute('style', 'margin-left: 100px'));
}
export const getSmile = (index) => {
  return `
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
  `
}
export const createAnimationNode = () => {
  const animationNode = document.createElement('div');
  animationNode.style.width = '50px';
  animationNode.style.height = '50px';
  animationNode.style.position = 'absolute';
  animationNode.style.right = '-78px';
  animationNode.style.top = '0px';
  return animationNode;
}
