import { ContactShadows, Environment, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Office } from "./Office";
import {motion} from "framer-motion-3d"
import { useThree } from "@react-three/fiber";


export const Experience = (props) => {
  const {section, menuOpened} = props

  const {viewport} = useThree()
  // const {animation} = useControls({
  //   animation:{
  //   value:"Typing",
  //   options:["Typing","Standing","Falling"]
  //   }
  // })
  return (
    <>
      <ambientLight intensity={1} />

      <motion.group position={[1.5,2,3]} scale={[0.9,0.9,0.9]} rotation-y={-Math.PI/4}
      animate={{
        y: section === 0 ? 0 : 1
      }}>
       {/* <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
    <Avatar animation={animation} /> */}

    <Office section={section} />

    </motion.group>

<motion.group position={[0,-1.5,-10]}
animate={{
  z: section === 1 ? 3 : -10,
  y: section === 1 ? -viewport.height : -1.5,
}}>
    <directionalLight position={[-5,3,5]} intensity={0.4} />
    <Float>
      <mesh position={[1,-3,-15]} scale={[1.7,1.7,1.7]}>
        <sphereGeometry />
        <MeshDistortMaterial 
        opacity={0.8}
        transparent
        distort={0.4}
        speed={4}
        color={"red"}
        />
      </mesh>
    </Float>
    <Float>
      <mesh position={[3,1,-18]} scale={[1,1,1]}>
        <sphereGeometry />
        <MeshDistortMaterial 
        opacity={0.8}
        transparent
        distort={1}
        speed={5}
        color={"yellow"}
        />
      </mesh>
    </Float>
    <Float>
      <mesh position={[-3,-1,-11]} scale={[1.4,1.4,1.4]}>
        <boxGeometry />
        <MeshWobbleMaterial 
        opacity={0.8}
        transparent
        distort={1}
        speed={5}
        color={"blue"}
        />
      </mesh>
    </Float>

    <group scale={[1.7,1.7,1.7]} >
      <Avatar animation={section === 0 ? "Typing" : "Standing"}/>
    </group>

    </motion.group>
       
           
    </>
  );
};
