
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'
import React, { Component } from 'react'
import styled from 'styled-components'

import * as THREE from "three";
import * as D3 from "d3";
class App extends Component {

  componentDidMount() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var frag = "precision highp float; varying vec2 vUv; uniform float time; uniform sampler2D texture1; void main()	{ gl_FragColor = (texture2D(texture1, vUv.xy ))* sin(time);}"     ;
    var vert = "			varying vec2 vUv;  void main()	{vUv = uv;gl_Position =  vec4(position*.5,1.0);	}";
    var renderer = new THREE.WebGLRenderer();
   var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
    var uniforms = {
          			time: { value: 1.0 },
				    texture1: { type: "t", value: new THREE.TextureLoader().load( 'https://i.imgur.com/73yWunX.png' ) }
				};
    var material = new THREE.ShaderMaterial( {

      uniforms: uniforms,
      vertexShader: vert,
      fragmentShader: frag

    } );
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    // container = document.getElementById('container');
    // renderer.setSize($(container).width(), $(container).height());
    // container.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth/4., window.innerHeight/4.);
    this.mount.appendChild(renderer.domElement);

    renderer.setClearColor( 0xF5F0EB );
    // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // var cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    camera.position.z = 5;

    var animate = function(timestamp) {
      requestAnimationFrame(animate);
uniforms.time.value = timestamp / 1000;
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}

const ExamplePage = ({ data }) => {
  return (
    <Container>
      <SEO title="Example Page" description="This is just an example page" />
      <Content>
        <h1>Example Page</h1>
        <p>
          This is just a regular page{' '}
          <a
            href="https://www.gatsbyjs.org/docs/recipes/#creating-pages-automatically"
            target="_blank"
            rel="noopener noreferrer"
          >
            created automatically
          </a>{' '}
          by placing a <code>React</code> component in{' '}
          <code>src/pages/example.js</code>. In the source code you will see an
          example of how to{' '}
          <a
            href="https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadow
          </a>{' '}
          components available in the theme such as the <code>Container</code>,{' '}
          <code>Content</code> and <code>SEO</code> components.
        </p>
        <p>
          For more information about the Gatsby theme powering this website
          visit the{' '}
          <a
            href="https://github.com/ryanwiemer/gatsby-theme-amsterdam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby Theme Amsterdam GitHub Repo
          </a>
          .
        </p>
      </Content>
<App/>
    </Container>
  )
}

export default ExamplePage
