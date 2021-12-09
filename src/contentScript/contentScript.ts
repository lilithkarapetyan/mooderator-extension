// TODO: content script
import './styles.css';
import { createAnimationNode, getNodes, getSmile, setContentVisible, shiftSidebar } from "./utils";

setTimeout(() => {
  const nodes = getNodes();

  shiftSidebar();
  setContentVisible();

  nodes.forEach((node, index) => {
    const animationNode = createAnimationNode();
    animationNode.innerHTML = getSmile(index);
    chrome.runtime.sendMessage({ message: 'text', data: (node as HTMLDivElement).innerText }, (res) => alert( res ));
    node.setAttribute('data-calculated', 'true');
    node.appendChild(animationNode);
  })

  document.onscroll = () => {
    const newNodes = getNodes().filter(node => node.getAttribute("data-calculated") !== "true")
    setContentVisible();

    newNodes.forEach((node, index) => {
      const animationNode = createAnimationNode();
      chrome.runtime.sendMessage({ message: 'text', data: (node as HTMLDivElement).innerText }, (res) => alert( res ));
      animationNode.innerHTML = getSmile(index);
      node.setAttribute('data-calculated', 'true');
      node.appendChild(animationNode);
    })

  }
}, 1000)
