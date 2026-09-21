(function(){
  "use strict";

  const palettes=Object.freeze({
    0:{skin:"#efd3c5",hair:"#6d4731",outer:"#17191f",outerShade:"#090b10",inner:"#b59660",innerShade:"#785c38",accent:"#8f2724",trim:"#d8dbe2",boot:"#5b2b24",weapon:"#e9edf3",edge:"#ffbe5c"},
    1:{skin:"#efd5c6",hair:"#26c7b5",outer:"#278f7c",outerShade:"#145449",inner:"#788f8b",innerShade:"#354a48",accent:"#b18562",trim:"#dce8e5",boot:"#172f2e",weapon:"#d9a735",edge:"#74ffb7"},
    2:{skin:"#e8c9bd",hair:"#342f45",outer:"#302744",outerShade:"#15121f",inner:"#5f526d",innerShade:"#282331",accent:"#b47cff",trim:"#b8a6d8",boot:"#17131e",weapon:"#d8c7ff",edge:"#b47cff"},
    3:{skin:"#efd8cf",hair:"#5554a4",outer:"#f2f4f8",outerShade:"#b9c4d5",inner:"#f8fafc",innerShade:"#25364a",accent:"#1d2f45",trim:"#ffffff",boot:"#6d4028",weapon:"#88d8ff",edge:"#d9f4ff"},
    4:{skin:"#e7d2c8",hair:"#111318",outer:"#17191d",outerShade:"#07080b",inner:"#eef1f4",innerShade:"#6d727b",accent:"#2a2e35",trim:"#ffffff",boot:"#111318",weapon:"#dfe6ef",edge:"#939aa5"},
    5:{skin:"#eed1c6",hair:"#d9e2ec",outer:"#29384a",outerShade:"#111a25",inner:"#d8e4ed",innerShade:"#637487",accent:"#78f0c3",trim:"#eaf7ff",boot:"#172330",weapon:"#bdebdc",edge:"#78f0c3"},
    6:{skin:"#eacdbf",hair:"#d8b16a",outer:"#315a78",outerShade:"#152b3d",inner:"#8fb8cd",innerShade:"#36576b",accent:"#5db8ff",trim:"#d9f2ff",boot:"#1b3040",weapon:"#dcebf4",edge:"#5db8ff"},
    7:{skin:"#ead0c5",hair:"#161b23",outer:"#243741",outerShade:"#0d171d",inner:"#6b8791",innerShade:"#2a414a",accent:"#65e6ff",trim:"#d9fbff",boot:"#111c22",weapon:"#e7fbff",edge:"#65e6ff"}
  });
  const idleSets=Object.freeze([
    ["bladeCheck","shoulderRoll","lookAround"],
    ["bowTune","hairFix","lookAround"],
    ["dualSpin","hoodCheck","lookAround"],
    ["focusOrb","sleeveFix","lookAround"],
    ["coatFix","bladeCheck","lookAround"],
    ["staffBalance","medicalCheck","lookAround"],
    ["shieldBrace","gauntletCheck","lookAround"],
    ["katanaSheath","crystalCheck","lookAround"]
  ].map(Object.freeze));

  window.PZExecutorModelData=Object.freeze({palettes,idleSets});
})();
