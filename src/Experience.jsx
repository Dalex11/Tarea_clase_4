import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Box from './Box'
import Ball from './Ball'
import Floor from './Floor'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from 'three'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { useRef } from 'react'

export default function Experience() {

    //directionalLight
    const directionalLightRef = useRef()
    useHelper(directionalLightRef, DirectionalLightHelper, 1)

    //hemisphereLight
    const hemisphereLightRef = useRef()
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1)

    //pointLight
    const pointLightRef = useRef()
    useHelper(pointLightRef, PointLightHelper, 1)

    //rectAreaLight
    const rectAreaLightRef = useRef()
    useHelper(rectAreaLightRef, RectAreaLightHelper, 1)

    //spotLight
    const spotLightRef = useRef()
    useHelper(spotLightRef, SpotLightHelper, 1)

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <Box  position = {[1.5, 0.5, 1]}/>
        <Box  position = {[-1, 0.5, 2]}/>
        <Box  position = {[0.6, 0.5, -1.5]}/>
        <Box  position = {[-1.2, 0.5, -0.78]}/>
        <Ball position = {[-2.5, 0.5, 1]} />
        <Floor position = {[0, 0, 0]}/>
        <directionalLight position={[2, 5, 2]} intensity={1.5} castShadow ref={directionalLightRef}/>
        {/* <hemisphereLight position={[2, 5, 2]} intensity={1.5} castShadow ref={hemisphereLightRef}/> */}
        {/* <pointLight position={[2, 5, 2]} intensity={1.5} castShadow ref={pointLightRef}/> */}
        {/* <rectAreaLight position={[0, 5, 0]} intensity={1.5} ref={rectAreaLightRef}/> */}
        {/* <spotLight position={[2, 5, 2]} intensity={1.5} castShadow ref={spotLightRef}/> */}
    </>
}