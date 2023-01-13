"use strict";(this.webpackChunkname=this.webpackChunkname||[]).push([[203],{203:n=>{n.exports='\x3c!-- \n  svg_bg -> main.js creates ands animate an svg\n--\x3e\n<div id="svg_bg"></div>\n<style>\n#svg_bg{\n  position: fixed;\n  z-index: -99; \n}\n</style>\n\n\x3c!-- \n  gradient_bg\n--\x3e\n<div id="gradient_bg"></div>\n<style>\n#gradient_bg{\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n\tbackground: linear-gradient(180deg, var(--bg1), var(--bg2));\n\tbackground-size: 100% 200%;\n\tanimation: gradient 60s ease infinite; \n  z-index: -99;\n}\n@keyframes gradient {\n\t0% {\t\tbackground-position: 0% 0%;\t} \n\t50% {\t  background-position: 100% 100%;\t} \n\t100% {\tbackground-position: 0% 0%;\t}  \n}\n</style>\n\n\x3c!-- \n  gradient_bg -> main.js resizes the path \n--\x3e\n<div id="mframe" style="offset-path: path(\'M 0 0 L 0 2 L 0 0\')"></div>\n<style>\n  /*Move along path   */\n  #mframe {\n    position:fixed;\n    clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);\n    animation: move 5s linear infinite;\n    width: 40px;\n    height: 40px;\n    background: cyan;\n  }\n  @keyframes move {\n    0% { offset-distance: 0%; }\n    100% { offset-distance: 100%; }\n  }\n</style>\n\n\x3c!-- \n  CONTENT\n--\x3e\n<div id="header">\n  <div id="header_nav" >\n    <h1><a  style="cursor: pointer;" href="/">CVMiniGames</a> | <a href="./">{{title}}</a></h1>\n    <p><a style="cursor: pointer;" target=blank href="https://www.cryptovoxels.com/play?coords=N@1447E,1128S">PLAY NOW</a></p>\n    <p>{{summary}}</p>\n  </div>\n  <div id="header_bg"></div> \n</div>\n\n<div id="toc">\n\n</div>\n<div id=\'articleContent\'>\n  {{content}}\n</div>'}}]);