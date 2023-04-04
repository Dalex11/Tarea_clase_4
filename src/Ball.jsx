import { useTexture, MeshReflectorMaterial } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";

export default function Box(props) {

    const PATH = '/static/textures/ball/';

    const texture = useTexture({
        map: PATH + 'basecolor.jpg',
        //displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg'
    })
    return (
        <mesh {...props} castShadow>
            <sphereGeometry args={[0.5]} />
            <MeshReflectorMaterial 
                {...texture}
                side={DoubleSide}
                resolution={ 512 }
                blur={ [ 1000, 1000 ] }
                mixBlur={ 2 }
                mirror={ 0.5 }
            />
        </mesh>
    )
}