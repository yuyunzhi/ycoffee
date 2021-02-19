export default function scrollbarWidth() {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = div.style.left = "-999px";
  div.style.width = div.style.height = "100px";
  div.style.overflow = "scroll";
  document.body.appendChild(div);
  // width 就是不同浏览器滚动条的宽度
  const width = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  return width;
}
