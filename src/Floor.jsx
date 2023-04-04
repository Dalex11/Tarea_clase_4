import { useTexture } from "@react-three/drei";
import { DoubleSide, FrontSide } from "three";

export default function Floor(props) {

    const PATH = '/static/textures/floor/';

    const texture = useTexture({
        map: PATH + 'basecolor.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })
    return (
        <mesh {...props} rotation-x={- Math.PI * 0.5} receiveShadow>
            <planeGeometry args={[6, 6]} />
            <meshStandardMaterial {...texture} side={FrontSide} />
        </mesh>
    )
}