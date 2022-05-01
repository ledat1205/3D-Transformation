import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.physicallyCorrectLights = true;
renderer.setSize( window.innerWidth*0.75, window.innerHeight*0.75);
document.getElementById("display").appendChild(renderer.domElement);


var geometry = new THREE.BoxGeometry( 5, 5, 5 ); 
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide, wireframe: true} );
var cube = new THREE.Mesh( geometry, material );
const controls = new OrbitControls( camera, renderer.domElement );

scene.add(cube);
camera.position.z=20;

var render = function()
{
    requestAnimationFrame( render );
    renderer.render(scene,camera);
};
render();


$(document).ready(function(){
    //Rotate Ox
    $("#rotate_ox").click(function(){
        var degree_ox = $("#input_degree_ox").val();
        cube.rotateX(degree_ox * Math.PI/180);
        render();
    });

    //Rotate Oy
    $("#rotate_oy").click(function(){
        var degree_oy = $("#input_degree_oy").val();
        cube.rotateY(degree_oy * Math.PI/180);
        render();
    });

    //Rotate Oz
    $("#rotate_oz").click(function(){
        var degree_oz = $("#input_degree_oz").val();
        cube.rotateZ(degree_oz * Math.PI/180);
        render();
    });

    //Rotate axis
    $("#rotate_axis").click(function(){
        var X_axis = $("#input_X_axis").val();
        var Y_axis = $("#input_Y_axis").val();
        var Z_axis = $("#input_Z_axis").val();
        var vetor = new THREE.Vector3(X_axis,Y_axis,Z_axis);
        var angle = $("#input_angle").val();
        cube.rotateOnWorldAxis(vetor,angle * Math.PI/180);
        render();
    })

    //Translate
    $("#translate").click(function(){
        var valuex = $("#input_x_value").val();
        var valuey = $("#input_y_value").val();
        var valuez = $("#input_z_value").val();
        cube.translateX(valuex);
        cube.translateY(valuey);
        cube.translateZ(valuez);
        render();
    });

    //Scale
    $("#scale").click(function(){
        var factorX = $("#scale_x_factor").val();
        var factorY = $("#scale_y_factor").val();
        var factorZ = $("#scale_z_factor").val();
        cube.scale.set(factorX,factorY,factorZ);
        render();
    });

});



