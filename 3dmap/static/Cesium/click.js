// let title, add, info_display = 'none',time = null
// let info = document.getElementById('info')
// let info_arry=info.innerText.split('|')
// let myMarker = info_arry.map((value)=>{
//   let json = JSON.parse(value);
//   return json
// })
// myMarker.forEach((value,index,arr)=>{
//   for(let key in value){
//     viewer.entities.add({
//       id: key,
//       name: 'marker',
//       position: Cesium.Cartesian3.fromDegrees(value[key][0],value[key][1]),
//       billboard: {
//         image: 'Cesium/marker.png',
//         show: true,
//         width: 30,
//         height: 30
//       },
//       label: {
//         text: value[key][2],
//         font: 'normal 14px MicroSoft YaHei',
//         fillColor: Cesium.Color.RED,
//         style: Cesium.LabelStyle.FILL_AND_OUTLINE,
//         backgroundColor: Cesium.Color.TRANSPARENT,
//         showBackground: true,
//         outlineWidth: 5,
//         verticalOrigin: Cesium.VerticalOrigin.BUTTON,
//         pixelOffset: new Cesium.Cartesian2(0, 20)
//       }
//     });
//   }
// })

// let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
// handler.setInputAction(function(movement) {
//   let pick = viewer.scene.pick(movement.position)
//   if (Cesium.defined(pick)) {
//     myMarker.forEach((value,index,arr)=>{
//       for(let key in value){
//         if (pick.id.id === key) {
//           title = value[key][3]
//           add = value[key][4]
//           info_display = "block"
//           let info_content =
//             `<div id="info-close">X</div><div class="info-name">&#21517;&#31216;&#65306;${title}</div><div class="info-add">&#22320;&#22336;&#65306;${add}</div><div class="info-none"></div>`
//           info.style.top = movement.position.y - 110 + 'px'
//           info.style.left = movement.position.x - 125 + 'px'
//           info.innerHTML = info_content
//           info.style.display = info_display
//           document.getElementById('info-close').onclick = function() {
//             close(10)
//           };
//         }
//       }
//     });
//   };
//   let ellipsoid = viewer.scene.globe.ellipsoid
//   let cartesian = viewer.scene.camera.pickEllipsoid(movement.position, ellipsoid)
//   if (cartesian) {
//     let cartographic = ellipsoid.cartesianToCartographic(cartesian)
//     let coordinate = "longitude:" + Cesium.Math.toDegrees(cartographic.longitude).toFixed(2) + ",latitude:" + Cesium.Math.toDegrees(
//         cartographic.latitude).toFixed(2) +
//       ",cameraHeight:" + Math.ceil(viewer.camera.positionCartographic.height)
//     // console.log(coordinate)
//   };

// }, Cesium.ScreenSpaceEventType.LEFT_DOWN)
// viewer.camera.changed.addEventListener(function(percentage) {
//   close(10)
// })

// function close(s) {
//   if (window.getComputedStyle(info, null).display != 'block') {
//     return false
//   }
//   clearTimeout(time)
//   time = setTimeout(() => {
//     info.style.display = "none"
//     clearTimeout(time)
//   }, s)
//   // console.log('close', s)
// }




var _0x5f54=['BUTTON','Cartesian2','ScreenSpaceEventHandler','scene','canvas','setInputAction','pick','position','defined','block','<div\x20id=\x22info-close\x22>X</div><div\x20class=\x22info-name\x22>&#21517;&#31216;&#65306;','</div><div\x20class=\x22info-add\x22>&#22320;&#22336;&#65306;','</div><div\x20class=\x22info-none\x22></div>','style','top','left','innerHTML','display','info-close','onclick','globe','ellipsoid','camera','pickEllipsoid','cartesianToCartographic','longitude:','Math','toDegrees','longitude','toFixed',',latitude:','latitude',',cameraHeight:','ceil','positionCartographic','height','ScreenSpaceEventType','LEFT_DOWN','changed','addEventListener','getComputedStyle','none','getElementById','info','innerText','split','map','parse','forEach','entities','add','marker','Cartesian3','fromDegrees','Cesium/marker.png','normal\x2014px\x20MicroSoft\x20YaHei','Color','RED','LabelStyle','FILL_AND_OUTLINE','TRANSPARENT','VerticalOrigin'];(function(_0x3340ea,_0x40bdcc){var _0xa78e77=function(_0x26cc23){while(--_0x26cc23){_0x3340ea['push'](_0x3340ea['shift']());}};_0xa78e77(++_0x40bdcc);}(_0x5f54,0xe3));var _0x34a0=function(_0x3678b5,_0x1ff8d2){_0x3678b5=_0x3678b5-0x0;var _0x3903f2=_0x5f54[_0x3678b5];return _0x3903f2;};let title,add,info_display=_0x34a0('0x0'),time=null;let info=document[_0x34a0('0x1')](_0x34a0('0x2'));let info_arry=info[_0x34a0('0x3')][_0x34a0('0x4')]('|');let myMarker=info_arry[_0x34a0('0x5')](_0x288d31=>{let _0x242818=JSON[_0x34a0('0x6')](_0x288d31);return _0x242818;});myMarker[_0x34a0('0x7')]((_0x44791f,_0xe71ee,_0x5dfdde)=>{for(let _0x27c6f3 in _0x44791f){viewer[_0x34a0('0x8')][_0x34a0('0x9')]({'id':_0x27c6f3,'name':_0x34a0('0xa'),'position':Cesium[_0x34a0('0xb')][_0x34a0('0xc')](_0x44791f[_0x27c6f3][0x0],_0x44791f[_0x27c6f3][0x1]),'billboard':{'image':_0x34a0('0xd'),'show':!![],'width':0x1e,'height':0x1e},'label':{'text':_0x44791f[_0x27c6f3][0x2],'font':_0x34a0('0xe'),'fillColor':Cesium[_0x34a0('0xf')][_0x34a0('0x10')],'style':Cesium[_0x34a0('0x11')][_0x34a0('0x12')],'backgroundColor':Cesium[_0x34a0('0xf')][_0x34a0('0x13')],'showBackground':!![],'outlineWidth':0x5,'verticalOrigin':Cesium[_0x34a0('0x14')][_0x34a0('0x15')],'pixelOffset':new Cesium[(_0x34a0('0x16'))](0x0,0x14)}});}});let handler=new Cesium[(_0x34a0('0x17'))](viewer[_0x34a0('0x18')][_0x34a0('0x19')]);handler[_0x34a0('0x1a')](function(_0x94898e){let _0x338097=viewer[_0x34a0('0x18')][_0x34a0('0x1b')](_0x94898e[_0x34a0('0x1c')]);if(Cesium[_0x34a0('0x1d')](_0x338097)){myMarker[_0x34a0('0x7')]((_0x3c765b,_0x27400b,_0x1d3572)=>{for(let _0x528b26 in _0x3c765b){if(_0x338097['id']['id']===_0x528b26){title=_0x3c765b[_0x528b26][0x3];add=_0x3c765b[_0x528b26][0x4];info_display=_0x34a0('0x1e');let _0x2d76d0=_0x34a0('0x1f')+title+_0x34a0('0x20')+add+_0x34a0('0x21');info[_0x34a0('0x22')][_0x34a0('0x23')]=_0x94898e[_0x34a0('0x1c')]['y']-0x6e+'px';info[_0x34a0('0x22')][_0x34a0('0x24')]=_0x94898e[_0x34a0('0x1c')]['x']-0x7d+'px';info[_0x34a0('0x25')]=_0x2d76d0;info[_0x34a0('0x22')][_0x34a0('0x26')]=info_display;document[_0x34a0('0x1')](_0x34a0('0x27'))[_0x34a0('0x28')]=function(){close(0xa);};}}});};let _0x4900a3=viewer[_0x34a0('0x18')][_0x34a0('0x29')][_0x34a0('0x2a')];let _0x55aada=viewer[_0x34a0('0x18')][_0x34a0('0x2b')][_0x34a0('0x2c')](_0x94898e[_0x34a0('0x1c')],_0x4900a3);if(_0x55aada){let _0x5239ee=_0x4900a3[_0x34a0('0x2d')](_0x55aada);let _0x455cc6=_0x34a0('0x2e')+Cesium[_0x34a0('0x2f')][_0x34a0('0x30')](_0x5239ee[_0x34a0('0x31')])[_0x34a0('0x32')](0x2)+_0x34a0('0x33')+Cesium[_0x34a0('0x2f')][_0x34a0('0x30')](_0x5239ee[_0x34a0('0x34')])[_0x34a0('0x32')](0x2)+_0x34a0('0x35')+Math[_0x34a0('0x36')](viewer[_0x34a0('0x2b')][_0x34a0('0x37')][_0x34a0('0x38')]);};},Cesium[_0x34a0('0x39')][_0x34a0('0x3a')]);viewer[_0x34a0('0x2b')][_0x34a0('0x3b')][_0x34a0('0x3c')](function(_0x41bb29){close(0xa);});function close(_0x3758a5){if(window[_0x34a0('0x3d')](info,null)[_0x34a0('0x26')]!=_0x34a0('0x1e')){return![];}clearTimeout(time);time=setTimeout(()=>{info[_0x34a0('0x22')][_0x34a0('0x26')]=_0x34a0('0x0');clearTimeout(time);},_0x3758a5);}
