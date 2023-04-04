import { useTexture } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";

export default function Box(props) {

    const PATH = '/static/textures/box/';

    const texture = useTexture({
        map: PATH + 'basecolor.jpg',
        //displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })
    return (
        <mesh {...props} castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial {...texture} side={DoubleSide} />
        </mesh>
    )
}