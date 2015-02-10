'use strict';
// requires
var THREE = require('./three');
var Projector = require('./Projector');
var VREffect = require('./VREffect');
var VRControls = require('./VRControls');
var MouseControls = require('./MouseControls');
var Stats = require('./stats');

// vars
var container, stats;
var camera, scene, raycaster, renderer;
var vrEffect;
var vrControls;
var mouseControls;
var headControls;
var objects = [];

var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;

var texture = THREE.ImageUtils.loadTexture( './src/imgs/room.jpg', THREE.UVMapping, function () {

	init();
	animate();

} );

document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onDocumentMouseDown( event ) {

    event.preventDefault();

    var vector = new THREE.Vector3(
        ( event.clientX / window.innerWidth ) * 2 - 1,
      - ( event.clientY / window.innerHeight ) * 2 + 1,
        0.5
    );
    vector.unproject( camera );

    var ray = new THREE.Raycaster( camera.position, 
                             vector.sub( camera.position ).normalize() );

    var intersects = ray.intersectObjects( objects );

    if ( intersects.length > 0 ) {
        intersects[0].object.material.color.setHex( Math.random() * 0xffffff );
    }

}




function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );


	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );

	scene = new THREE.Scene();


	var mesh = new THREE.Mesh( new THREE.SphereGeometry( 500, 60, 40 ), new THREE.MeshBasicMaterial( { map: texture } ) );
	mesh.scale.x = -1;
	scene.add( mesh );

	var light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );

	var geometry = new THREE.BoxGeometry( 20, 20, 20 );

	for ( var i = 0; i < 200; i ++ ) {

		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

		object.position.x = Math.random() * 800 - 400;
		object.position.y = Math.random() * 800 - 400;
		object.position.z = Math.random() * 800 - 400;

		object.rotation.x = Math.random() * 2 * Math.PI;
		object.rotation.y = Math.random() * 2 * Math.PI;
		object.rotation.z = Math.random() * 2 * Math.PI;

		object.scale.x = Math.random() + 0.5;
		object.scale.y = Math.random() + 0.5;
		object.scale.z = Math.random() + 0.5;

		objects.push(object);
		scene.add( object );

	}

	raycaster = new THREE.Raycaster();
	console.log(raycaster.setFromCamera);
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	// renderer.setPixelRatio( window.devicePixelRatio );

	var fullScreenButton = document.querySelector( '.full-screen' );
	var mouseLookButton = document.querySelector( '.mouse-look' );
	var mouseLook = false;

	fullScreenButton.onclick = function() {
		vrEffect.setFullScreen( true );
	};

	vrControls = new VRControls(camera);
	mouseControls = new MouseControls(camera);
	headControls = vrControls;

	mouseLookButton.onclick = function() {
		mouseLook = !mouseLook;

		if (mouseLook) {
			headControls = mouseControls;
			mouseLookButton.classList.add('enabled');
		} else {
			headControls = vrControls;
			mouseLookButton.classList.remove('enabled');
		}
	}

	vrEffect = new VREffect(renderer, VREffectLoaded);
	function VREffectLoaded(error) {
		if (error) {
			fullScreenButton.innerHTML = error;
			fullScreenButton.classList.add('error');
		}
	}

	renderer.setClearColor( 0xf0f0f0 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;
	container.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	vrEffect.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

	event.preventDefault();

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

//

function animate() {

	requestAnimationFrame( animate );

	render();
	stats.update();

}

function render() {

	theta += 0.1;

	// camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
	// camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
	// camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
	// camera.lookAt( scene.position );

	// camera.updateMatrixWorld();

	// find intersections

	raycaster.setFromCamera( mouse, camera );

	var intersects = raycaster.intersectObjects( scene.children );

	if ( intersects.length > 0 ) {

		if ( INTERSECTED != intersects[ 0 ].object ) {

			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
			INTERSECTED.material.emissive.setHex( 0xff0000 );

		}

	} else {

		if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

		INTERSECTED = null;

	}

	headControls.update();
	vrEffect.render( scene, camera );

}