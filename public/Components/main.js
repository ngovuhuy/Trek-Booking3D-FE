const panorama = new PANOLENS.ImagePanorama( 'https://firebasestorage.googleapis.com/v0/b/mangastore-4146a.appspot.com/o/Trek_Image%2Fpexels-quang-nguyen-vinh-222549-6130060%20(1).jpg?alt=media&token=648dc4d1-55a7-40f5-aa9f-5b2607af0a73');
const panorama2 = new PANOLENS.ImagePanorama('https://firebasestorage.googleapis.com/v0/b/mangastore-4146a.appspot.com/o/Trek_Image%2Fpexels-pacofdezsaura-801904.jpg?alt=media&token=b7891348-e0a4-4bf5-b47b-4c2631a889e9');
let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),
    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});

panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);

viewer.add( panorama,panorama2 );

