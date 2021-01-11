import { FC, memo, useContext, useEffect, useRef, useState, Dispatch, SetStateAction } from 'react'
import { GroupProps, useLoader } from 'react-three-fiber'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh, MeshStandardMaterial, Group, Material, Color } from 'three'
import ColorContext from 'contexts/ColorContext'

type GLTFResult = GLTF & {
  nodes: {
    body_04_SUB0_EXT_Carpaint_0: Mesh
    CINTURE_OFF_SUB0_INT_SeatBelts_0: Mesh
    CINTURE_OFF_SUB1_INT_Decals_Plastic_Base_0: Mesh
    CINTURE_OFF_SUB2_INT_Decals_Chrome_Aluminium_0: Mesh
    Cylinder12_INT_LCD_0: Mesh
    Cylinder13_INT_LCD_0: Mesh
    Cylinder3_SUB0_INT_Decals_Plastic_Base_0: Mesh
    Cylinder3_SUB1_INT_Decals_Chrome_needle_0: Mesh
    Cylinder5_SUB0_INT_Decals_Plastic_Base_0: Mesh
    Cylinder5_SUB1_INT_Decals_Chrome_needle_0: Mesh
    Front_LIGHT_Beam_EXT_FrontLight_Beam_0: Mesh
    GEO_Black_SUB0_INT_Decals_Flat_NM_0: Mesh
    GEO_Black_SUB1_INT_Decals_Rubber_0: Mesh
    GEO_Carpet_INT_OCC_carpet_base_0: Mesh
    GEO_Chassis_SUB2_EXT_Rubber_0: Mesh
    GEO_Cockpit_HR_SUB0_INT_OCC_Skin_GREY_0: Mesh
    GEO_Cockpit_HR_SUB1_INT_OCC_Plastic_GREY_0: Mesh
    GEO_Cockpit_HR_SUB2_INT_OCC_Plastic_Detail_GREY_0: Mesh
    GEO_Cockpit_HR_SUB3_INT_OCC_Plastic_Black_REF_0: Mesh
    GEO_Cockpit_HR_SUB4_INT_OCC_Speakers_0: Mesh
    GEO_Cockpit_HR_SUB5_INT_OCC_Carpets_0: Mesh
    GEO_Cockpit_HR_SUB6_INT_OCC_Carpaint_0: Mesh
    GEO_Decals_1_INT_Decals_Flat_alfa_NM_0: Mesh
    GEO_Decals_2_INT_Decals_Flat_alfa_NM_0: Mesh
    GEO_Decals_SUB0_INT_Decals_Plastic_alfa_NM_0: Mesh
    GEO_Decals_SUB1_INT_Decals_Flat_alfa_NM_0: Mesh
    GEO_Detail_EXT_Details_0: Mesh
    GEO_Details_SUB0_INT_Decals_Plastic_Base_0: Mesh
    GEO_Details_SUB1_INT_Decals_Rubber_0: Mesh
    GEO_Details_SUB2_INT_Decals_Plastic_REF_0: Mesh
    GEO_Details_SUB3_INT_Decals_Chrome_Aluminium_0: Mesh
    GEO_Details_SUB4_INT_SeatBelts_0: Mesh
    GEO_Details_SUB5_INT_Decals_Flat_NM_0: Mesh
    GEO_DISC_LF_EXT_Disc_0: Mesh
    GEO_Door_L_SUB2_EXT_Rubber_0: Mesh
    GEO_Door_R_SUB2_EXT_Rubber_0: Mesh
    GEO_FontLogo_EXT_Chrome_0: Mesh
    GEO_FrontLight_EXT_Lights_Plastic_0: Mesh
    GEO_Gauges_INT_Gauges_0: Mesh
    GEO_Gauges_speed_INT_Gauges_0: Mesh
    GEO_GearHandle_SUB0_INT_OCC_Plastic_GREY_0: Mesh
    GEO_GearHandle_SUB1_INT_Decals_Chrome_Aluminium_0: Mesh
    GEO_Glass_SUB0_EXT_Glass_flat_0: Mesh
    GEO_Glass_SUB1_EXT_Glass_0: Mesh
    GEO_Glass_SUB2_EXT_Glass_rear_Light_0: Mesh
    GEO_GlassFront_aagla_0: Mesh
    GEO_Grid_INT_Grid_Rear_0: Mesh
    GEO_Hood_SUB1_EXT_Details_0: Mesh
    GEO_Int_Glass_INT_Glass_0: Mesh
    GEO_IntDoor_L_SUB0_INT_OCC_Carpaint_0: Mesh
    GEO_IntDoor_L_SUB1_INT_OCC_Plastic_GREY_0: Mesh
    GEO_IntDoor_L_SUB2_INT_OCC_Speakers_0: Mesh
    GEO_IntDoor_L_SUB3_INT_OCC_Skin_GREY_0: Mesh
    GEO_IntDoor_L_SUB4_INT_Decals_Plastic_Base_0: Mesh
    GEO_IntDoor_L_SUB5_INT_Decals_Rubber_0: Mesh
    GEO_IntDoor_L_SUB6_INT_OCC_Carbon_0: Mesh
    GEO_IntDoor_L_SUB7_INT_Decals_Chrome_Aluminium_0: Mesh
    GEO_IntDoor_L_SUB8_INT_Decals_Chrome_Alfa_0: Mesh
    GEO_IntDoor_L_SUB9_INT_Decals_Flat_NM_0: Mesh
    GEO_IntDoor_R_SUB0_INT_OCC_Carpaint_0: Mesh
    GEO_IntDoor_R_SUB1_INT_OCC_Plastic_GREY_0: Mesh
    GEO_IntDoor_R_SUB2_INT_OCC_Speakers_0: Mesh
    GEO_IntDoor_R_SUB3_INT_OCC_Skin_GREY_0: Mesh
    GEO_IntDoor_R_SUB4_INT_OCC_Carbon_0: Mesh
    GEO_IntDoor_R_SUB5_INT_Decals_Chrome_Aluminium_0: Mesh
    GEO_IntDoor_R_SUB6_INT_Decals_Plastic_Base_0: Mesh
    GEO_IntDoor_R_SUB7_INT_Decals_Rubber_0: Mesh
    GEO_IntDoor_R_SUB8_INT_Decals_Flat_NM_0: Mesh
    GEO_IntDoor_R_SUB9_INT_Decals_Chrome_Alfa_0: Mesh
    GEO_LCD_INT_LCD_0: Mesh
    GEO_LightGlass_EXT_Glass_0: Mesh
    GEO_Lights_SUB0_EXT_Lights_Chrome_0: Mesh
    GEO_Lights_SUB1_EXT_Lights_Plastic_0: Mesh
    GEO_MiniGrid_INT_MiniGrid_Dials_0: Mesh
    GEO_MIRROR_Mirror_0: Mesh
    GEO_MIRROR1_Mirror_0: Mesh
    GEO_MIRROR_L_Mirror_0: Mesh
    GEO_MIRROR_R_Mirror_0: Mesh
    GEO_Navigator_GEO_Decals_0: Mesh
    GEO_Rim_Base1_SUB1_EXT_Logo_0: Mesh
    GEO_Rim_Base2_SUB1_EXT_Logo_0: Mesh
    GEO_Rim_Base3_SUB1_EXT_Logo_0: Mesh
    GEO_Rim_Base_SUB0_EXT_Rim_0: Mesh
    GEO_Rim_Base_SUB1_EXT_Logo_0: Mesh
    GEO_Roof_SUB0_INT_OCC_Fabric_Roof_0: Mesh
    GEO_Roof_SUB1_INT_OCC_Plastic_GREY_0: Mesh
    GEO_Seams_INT_Seams_0: Mesh
    GEO_seams1_INT_Seams_0: Mesh
    GEO_Seat_Seams_INT_Decals_Rubber_0: Mesh
    GEO_Seats_SUB0_INT_OCC_alcantara_0: Mesh
    GEO_Seats_SUB1_INT_OCC_Skin_GREY_0: Mesh
    GEO_Seats_SUB2_INT_OCC_Plastic_GREY_0: Mesh
    GEO_Shift_Skin_SUB0_INT_OCC_SkinShift_GREY_0: Mesh
    GEO_Shift_Skin_SUB1_INT_Seam_Shift_0: Mesh
    GEO_steer_HR_SUB0_INT_Decals_Chrome_Aluminium_0: Mesh
    GEO_steer_HR_SUB1_INT_Decals_Plastic_Base_0: Mesh
    GEO_steer_HR_SUB2_INT_OCC_Skin_GREY_0: Mesh
    GEO_Susp4_EXT_Calipers_0: Mesh
    ['GEO_Tyre2_04_-_Default_0']: Mesh
    gum_07_ant_0: Mesh
    LED_LIGHT_INT_Decals_Flat_alfa_NM_0: Mesh
    LED_START_INT_Decals_Flat_alfa_NM_0: Mesh
    LIGHT_0_EXT_Lights_Chrome_0: Mesh
    LIGHT_1_EXT_Lights_Chrome_0: Mesh
    LIGHT_BUMPER_EXT_Lights_Chrome_0: Mesh
    Object001_INT_OCC_Skin_GREY2_0: Mesh
    ['pipr_22_-_Default_0']: Mesh
    Plate_LODA_EXT_PLATE_plastic_0: Mesh
    polymsh16_SUB1_EXT_Plastic_Black_0: Mesh
    polymsh_detached148_INT_Decals_Plastic_Base_0: Mesh
    polymsh_detached32_EXT_Details_0: Mesh
    polymsh_detached33_SUB0_EXT_Details_0: Mesh
    polymsh_detached33_SUB1_EXT_Chrome_0: Mesh
    polymsh_detached37_EXT_Details_0: Mesh
    polymsh_detached55_EXT_Lights_Chrome_0: Mesh
    polymsh_detached61_EXT_Lights_Chrome_0: Mesh
    polymsh_detached64_EXT_Chrome_0: Mesh
    polymsh_detached65_EXT_Chrome_0: Mesh
    polymsh_detached67_SUB0_EXT_Calipers_0: Mesh
    polymsh_detached67_SUB1_black_0: Mesh
    polymsh_extracted10_EXT_Glass_0: Mesh
    polymsh_extracted11_EXT_Glass_0: Mesh
    polymsh_extracted21_SUB0_INT_Decals_Plastic_alfa_NM_0: Mesh
    polymsh_extracted21_SUB1_INT_Decals_Flat_alfa_NM_0: Mesh
    polymsh_extracted21_SUB2_INT_Decals_Plastic_REF_0: Mesh
    polymsh_extracted21_SUB3_INT_Decals_Metal_Alfa_0: Mesh
    polymsh_extracted21_SUB4_INT_Decals_Chrome_Alfa_0: Mesh
    polymsh_extracted24_INT_Seams_0: Mesh
    polymsh_extracted25_INT_Seams_0: Mesh
    polymsh_extracted26_INT_Seams_0: Mesh
    polymsh_extracted27_INT_Seams_0: Mesh
    polymsh_extracted31_INT_Seams_0: Mesh
    polymsh_extracted34_INT_Decals_Flat_alfa_NM_0: Mesh
    rad_radiar_0: Mesh
    REARLIGHT_0_EXT_Lights_Chrome_0: Mesh
    REARLIGHT_1_EXT_Lights_Chrome_0: Mesh
    REARLIGHT_2_EXT_Lights_Chrome_0: Mesh
    REARLIGHT_3_EXT_Lights_Chrome_0: Mesh
    REARLIGHT_4_EXT_Lights_Chrome_0: Mesh
    REARLIGHT_5_EXT_Lights_Chrome_0: Mesh
    REARLIGHT_Beam_EXT_RearLight_Beam_0: Mesh
  }
  materials: {
    EXT_Carpaint: MeshStandardMaterial
    INT_SeatBelts: MeshStandardMaterial
    INT_Decals_Plastic_Base: MeshStandardMaterial
    INT_Decals_Chrome_Aluminium: MeshStandardMaterial
    INT_LCD: MeshStandardMaterial
    INT_Decals_Chrome_needle: MeshStandardMaterial
    EXT_FrontLight_Beam: MeshStandardMaterial
    INT_Decals_Flat_NM: MeshStandardMaterial
    INT_Decals_Rubber: MeshStandardMaterial
    INT_OCC_carpet_base: MeshStandardMaterial
    EXT_Rubber: MeshStandardMaterial
    INT_OCC_Skin_GREY: MeshStandardMaterial
    INT_OCC_Plastic_GREY: MeshStandardMaterial
    INT_OCC_Plastic_Detail_GREY: MeshStandardMaterial
    INT_OCC_Plastic_Black_REF: MeshStandardMaterial
    INT_OCC_Speakers: MeshStandardMaterial
    INT_OCC_Carpets: MeshStandardMaterial
    INT_OCC_Carpaint: MeshStandardMaterial
    INT_Decals_Flat_alfa_NM: MeshStandardMaterial
    INT_Decals_Plastic_alfa_NM: MeshStandardMaterial
    EXT_Details: MeshStandardMaterial
    INT_Decals_Plastic_REF: MeshStandardMaterial
    EXT_Disc: MeshStandardMaterial
    EXT_Chrome: MeshStandardMaterial
    EXT_Lights_Plastic: MeshStandardMaterial
    INT_Gauges: MeshStandardMaterial
    EXT_Glass_flat: MeshStandardMaterial
    EXT_Glass: MeshStandardMaterial
    EXT_Glass_rear_Light: MeshStandardMaterial
    aagla: MeshStandardMaterial
    INT_Grid_Rear: MeshStandardMaterial
    INT_Glass: MeshStandardMaterial
    INT_OCC_Carbon: MeshStandardMaterial
    INT_Decals_Chrome_Alfa: MeshStandardMaterial
    EXT_Lights_Chrome: MeshStandardMaterial
    INT_MiniGrid_Dials: MeshStandardMaterial
    Mirror: MeshStandardMaterial
    GEO_Decals: MeshStandardMaterial
    EXT_Logo: MeshStandardMaterial
    EXT_Rim: MeshStandardMaterial
    INT_OCC_Fabric_Roof: MeshStandardMaterial
    INT_Seams: MeshStandardMaterial
    INT_OCC_alcantara: MeshStandardMaterial
    INT_OCC_SkinShift_GREY: MeshStandardMaterial
    INT_Seam_Shift: MeshStandardMaterial
    EXT_Calipers: MeshStandardMaterial
    ['04_-_Default']: MeshStandardMaterial
    material: MeshStandardMaterial
    INT_OCC_Skin_GREY2: MeshStandardMaterial
    ['22_-_Default']: MeshStandardMaterial
    EXT_PLATE_plastic: MeshStandardMaterial
    EXT_Plastic_Black: MeshStandardMaterial
    black: MeshStandardMaterial
    INT_Decals_Metal_Alfa: MeshStandardMaterial
    radiar: MeshStandardMaterial
    EXT_RearLight_Beam: MeshStandardMaterial
  }
}

interface CarProps {
  color: string
  setColor: Dispatch<SetStateAction<string>>
}

const Car: FC<GroupProps & CarProps> = memo(({ color, setColor }) => {
  const { nodes, materials } = useLoader<GLTFResult>(GLTFLoader, './models/car.gltf')
  const group = useRef<Group>(null)
  // const { color, setColor } = useContext(ColorContext)

  const [isHovered, setIsHovered] = useState<Material | null>(null)
  const currentElementRef = useRef<Mesh<any, MeshStandardMaterial> | null>(null)

  // useEffect(() => {
  //   const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[isHovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${isHovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
  //   const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
  //   document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(isHovered ? cursor : auto)}'), auto`
  // }, [isHovered])

  useEffect(() => {
    const pickedColor = new Color(color)
    if(/^#\w+/.test(color)) currentElementRef.current?.material.color.set(pickedColor)
  }, [color])

  return (
    <group ref={group} dispose={null} scale={[10, 10, 10]} position={[-10, -10, 0]}
      onClick={(e) => {
        e.stopPropagation()

        if (e.object instanceof Mesh) {
          currentElementRef.current = e.object
          setColor?.(e.object.material.color.getHexString())
        }
      }}
    >
      <group rotation={[-Math.PI / 2, 0.2, 0.2]}>
        <group position={[0.96, 0, 0.04]} rotation={[0, -0.2, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Carpaint} geometry={nodes.body_04_SUB0_EXT_Carpaint_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_SeatBelts} geometry={nodes.CINTURE_OFF_SUB0_INT_SeatBelts_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_Base}
                geometry={nodes.CINTURE_OFF_SUB1_INT_Decals_Plastic_Base_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_Aluminium}
                geometry={nodes.CINTURE_OFF_SUB2_INT_Decals_Chrome_Aluminium_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_LCD} geometry={nodes.Cylinder12_INT_LCD_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_LCD} geometry={nodes.Cylinder13_INT_LCD_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_Base}
                geometry={nodes.Cylinder3_SUB0_INT_Decals_Plastic_Base_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_needle}
                geometry={nodes.Cylinder3_SUB1_INT_Decals_Chrome_needle_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_Base}
                geometry={nodes.Cylinder5_SUB0_INT_Decals_Plastic_Base_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_needle}
                geometry={nodes.Cylinder5_SUB1_INT_Decals_Chrome_needle_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_FrontLight_Beam}
                geometry={nodes.Front_LIGHT_Beam_EXT_FrontLight_Beam_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_NM}
                geometry={nodes.GEO_Black_SUB0_INT_Decals_Flat_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Rubber}
                geometry={nodes.GEO_Black_SUB1_INT_Decals_Rubber_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_carpet_base}
                geometry={nodes.GEO_Carpet_INT_OCC_carpet_base_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Rubber} geometry={nodes.GEO_Chassis_SUB2_EXT_Rubber_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Skin_GREY}
                geometry={nodes.GEO_Cockpit_HR_SUB0_INT_OCC_Skin_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Plastic_GREY}
                geometry={nodes.GEO_Cockpit_HR_SUB1_INT_OCC_Plastic_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Plastic_Detail_GREY}
                geometry={nodes.GEO_Cockpit_HR_SUB2_INT_OCC_Plastic_Detail_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Plastic_Black_REF}
                geometry={nodes.GEO_Cockpit_HR_SUB3_INT_OCC_Plastic_Black_REF_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Speakers}
                geometry={nodes.GEO_Cockpit_HR_SUB4_INT_OCC_Speakers_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Carpets}
                geometry={nodes.GEO_Cockpit_HR_SUB5_INT_OCC_Carpets_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Carpaint}
                geometry={nodes.GEO_Cockpit_HR_SUB6_INT_OCC_Carpaint_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_alfa_NM}
                geometry={nodes.GEO_Decals_1_INT_Decals_Flat_alfa_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_alfa_NM}
                geometry={nodes.GEO_Decals_2_INT_Decals_Flat_alfa_NM_0.geometry}
              />
            </group>
            <group position={[0.34, 0.77, 0.04]} rotation={[-1.28, 0.48, 0]}>
              <group position={[-0.34, -0.18, -0.75]} rotation={[-0.29, 0, 0]}>
                <mesh
                  material={materials.INT_Decals_Plastic_alfa_NM}
                  geometry={nodes.GEO_Decals_SUB0_INT_Decals_Plastic_alfa_NM_0.geometry}
                />
              </group>
            </group>
            <group position={[0.34, 0.77, 0.04]} rotation={[-1.28, 0.48, 0]}>
              <group position={[-0.34, -0.18, -0.75]} rotation={[-0.29, 0, 0]}>
                <mesh
                  material={materials.INT_Decals_Flat_alfa_NM}
                  geometry={nodes.GEO_Decals_SUB1_INT_Decals_Flat_alfa_NM_0.geometry}
                />
              </group>
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Details} geometry={nodes.GEO_Detail_EXT_Details_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_Base}
                geometry={nodes.GEO_Details_SUB0_INT_Decals_Plastic_Base_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Rubber}
                geometry={nodes.GEO_Details_SUB1_INT_Decals_Rubber_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_REF}
                geometry={nodes.GEO_Details_SUB2_INT_Decals_Plastic_REF_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_Aluminium}
                geometry={nodes.GEO_Details_SUB3_INT_Decals_Chrome_Aluminium_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_SeatBelts} geometry={nodes.GEO_Details_SUB4_INT_SeatBelts_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_NM}
                geometry={nodes.GEO_Details_SUB5_INT_Decals_Flat_NM_0.geometry}
              />
            </group>
            <group position={[-0.34, 0.04, 0.3]} rotation={[-Math.PI / 2, 0.03, 0.32]}>
              <mesh material={materials.EXT_Disc} geometry={nodes.GEO_DISC_LF_EXT_Disc_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Rubber} geometry={nodes.GEO_Door_L_SUB2_EXT_Rubber_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Rubber} geometry={nodes.GEO_Door_R_SUB2_EXT_Rubber_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Chrome} geometry={nodes.GEO_FontLogo_EXT_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_Lights_Plastic}
                geometry={nodes.GEO_FrontLight_EXT_Lights_Plastic_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Gauges} geometry={nodes.GEO_Gauges_INT_Gauges_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Gauges} geometry={nodes.GEO_Gauges_speed_INT_Gauges_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Plastic_GREY}
                geometry={nodes.GEO_GearHandle_SUB0_INT_OCC_Plastic_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_Aluminium}
                geometry={nodes.GEO_GearHandle_SUB1_INT_Decals_Chrome_Aluminium_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Glass_flat} geometry={nodes.GEO_Glass_SUB0_EXT_Glass_flat_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Glass} geometry={nodes.GEO_Glass_SUB1_EXT_Glass_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_Glass_rear_Light}
                geometry={nodes.GEO_Glass_SUB2_EXT_Glass_rear_Light_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.aagla} geometry={nodes.GEO_GlassFront_aagla_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Grid_Rear} geometry={nodes.GEO_Grid_INT_Grid_Rear_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Details} geometry={nodes.GEO_Hood_SUB1_EXT_Details_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Glass} geometry={nodes.GEO_Int_Glass_INT_Glass_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Carpaint}
                geometry={nodes.GEO_IntDoor_L_SUB0_INT_OCC_Carpaint_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Plastic_GREY}
                geometry={nodes.GEO_IntDoor_L_SUB1_INT_OCC_Plastic_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Speakers}
                geometry={nodes.GEO_IntDoor_L_SUB2_INT_OCC_Speakers_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Skin_GREY}
                geometry={nodes.GEO_IntDoor_L_SUB3_INT_OCC_Skin_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_Base}
                geometry={nodes.GEO_IntDoor_L_SUB4_INT_Decals_Plastic_Base_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Rubber}
                geometry={nodes.GEO_IntDoor_L_SUB5_INT_Decals_Rubber_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_OCC_Carbon} geometry={nodes.GEO_IntDoor_L_SUB6_INT_OCC_Carbon_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_Aluminium}
                geometry={nodes.GEO_IntDoor_L_SUB7_INT_Decals_Chrome_Aluminium_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_Alfa}
                geometry={nodes.GEO_IntDoor_L_SUB8_INT_Decals_Chrome_Alfa_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_NM}
                geometry={nodes.GEO_IntDoor_L_SUB9_INT_Decals_Flat_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Carpaint}
                geometry={nodes.GEO_IntDoor_R_SUB0_INT_OCC_Carpaint_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Plastic_GREY}
                geometry={nodes.GEO_IntDoor_R_SUB1_INT_OCC_Plastic_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Speakers}
                geometry={nodes.GEO_IntDoor_R_SUB2_INT_OCC_Speakers_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Skin_GREY}
                geometry={nodes.GEO_IntDoor_R_SUB3_INT_OCC_Skin_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_OCC_Carbon} geometry={nodes.GEO_IntDoor_R_SUB4_INT_OCC_Carbon_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_Aluminium}
                geometry={nodes.GEO_IntDoor_R_SUB5_INT_Decals_Chrome_Aluminium_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_Base}
                geometry={nodes.GEO_IntDoor_R_SUB6_INT_Decals_Plastic_Base_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Rubber}
                geometry={nodes.GEO_IntDoor_R_SUB7_INT_Decals_Rubber_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_NM}
                geometry={nodes.GEO_IntDoor_R_SUB8_INT_Decals_Flat_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_Alfa}
                geometry={nodes.GEO_IntDoor_R_SUB9_INT_Decals_Chrome_Alfa_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_LCD} geometry={nodes.GEO_LCD_INT_LCD_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Glass} geometry={nodes.GEO_LightGlass_EXT_Glass_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_Lights_Chrome}
                geometry={nodes.GEO_Lights_SUB0_EXT_Lights_Chrome_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_Lights_Plastic}
                geometry={nodes.GEO_Lights_SUB1_EXT_Lights_Plastic_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_MiniGrid_Dials}
                geometry={nodes.GEO_MiniGrid_INT_MiniGrid_Dials_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Mirror} geometry={nodes.GEO_MIRROR_Mirror_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Mirror} geometry={nodes.GEO_MIRROR1_Mirror_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Mirror} geometry={nodes.GEO_MIRROR_L_Mirror_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Mirror} geometry={nodes.GEO_MIRROR_R_Mirror_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.GEO_Decals} geometry={nodes.GEO_Navigator_GEO_Decals_0.geometry} />
            </group>
            <group position={[-0.39, 0.01, -0.18]} rotation={[-Math.PI / 2, -0.04, 0.31]}>
              <mesh material={materials.EXT_Logo} geometry={nodes.GEO_Rim_Base1_SUB1_EXT_Logo_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Logo} geometry={nodes.GEO_Rim_Base2_SUB1_EXT_Logo_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Logo} geometry={nodes.GEO_Rim_Base3_SUB1_EXT_Logo_0.geometry} />
            </group>
            <group position={[-0.34, 0.04, 0.3]} rotation={[-Math.PI / 2, 0.03, 0.32]}>
              <mesh material={materials.EXT_Rim} geometry={nodes.GEO_Rim_Base_SUB0_EXT_Rim_0.geometry} />
            </group>
            <group position={[-0.34, 0.04, 0.3]} rotation={[-Math.PI / 2, 0.03, 0.32]}>
              <mesh material={materials.EXT_Logo} geometry={nodes.GEO_Rim_Base_SUB1_EXT_Logo_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Fabric_Roof}
                geometry={nodes.GEO_Roof_SUB0_INT_OCC_Fabric_Roof_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Plastic_GREY}
                geometry={nodes.GEO_Roof_SUB1_INT_OCC_Plastic_GREY_0.geometry}
              />
            </group>
            <group position={[0.34, 0.77, 0.04]} rotation={[-1.28, 0.48, 0]}>
              <group position={[-0.34, -0.18, -0.75]} rotation={[-0.29, 0, 0]}>
                <mesh material={materials.INT_Seams} geometry={nodes.GEO_Seams_INT_Seams_0.geometry} />
              </group>
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Seams} geometry={nodes.GEO_seams1_INT_Seams_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Rubber}
                geometry={nodes.GEO_Seat_Seams_INT_Decals_Rubber_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_alcantara}
                geometry={nodes.GEO_Seats_SUB0_INT_OCC_alcantara_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Skin_GREY}
                geometry={nodes.GEO_Seats_SUB1_INT_OCC_Skin_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_Plastic_GREY}
                geometry={nodes.GEO_Seats_SUB2_INT_OCC_Plastic_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_OCC_SkinShift_GREY}
                geometry={nodes.GEO_Shift_Skin_SUB0_INT_OCC_SkinShift_GREY_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Seam_Shift}
                geometry={nodes.GEO_Shift_Skin_SUB1_INT_Seam_Shift_0.geometry}
              />
            </group>
            <group position={[0.34, 0.77, 0.04]} rotation={[-1.28, 0.48, 0]}>
              <group position={[-0.34, -0.18, -0.75]} rotation={[-0.29, 0, 0]}>
                <mesh
                  material={materials.INT_Decals_Chrome_Aluminium}
                  geometry={nodes.GEO_steer_HR_SUB0_INT_Decals_Chrome_Aluminium_0.geometry}
                />
              </group>
            </group>
            <group position={[0.34, 0.77, 0.04]} rotation={[-1.28, 0.48, 0]}>
              <group position={[-0.34, -0.18, -0.75]} rotation={[-0.29, 0, 0]}>
                <mesh
                  material={materials.INT_Decals_Plastic_Base}
                  geometry={nodes.GEO_steer_HR_SUB1_INT_Decals_Plastic_Base_0.geometry}
                />
              </group>
            </group>
            <group position={[0.34, 0.77, 0.04]} rotation={[-1.28, 0.48, 0]}>
              <group position={[-0.34, -0.18, -0.75]} rotation={[-0.29, 0, 0]}>
                <mesh
                  material={materials.INT_OCC_Skin_GREY}
                  geometry={nodes.GEO_steer_HR_SUB2_INT_OCC_Skin_GREY_0.geometry}
                />
              </group>
            </group>
            <group position={[-0.34, 0.04, 0.3]} rotation={[-Math.PI / 2, 0.03, 0.32]}>
              <mesh material={materials.EXT_Calipers} geometry={nodes.GEO_Susp4_EXT_Calipers_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials['04_-_Default']} geometry={nodes['GEO_Tyre2_04_-_Default_0'].geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.material} geometry={nodes.gum_07_ant_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_alfa_NM}
                geometry={nodes.LED_LIGHT_INT_Decals_Flat_alfa_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_alfa_NM}
                geometry={nodes.LED_START_INT_Decals_Flat_alfa_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.LIGHT_0_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.LIGHT_1_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.LIGHT_BUMPER_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group position={[0.34, 0.77, 0.04]} rotation={[-1.28, 0.48, 0]}>
              <group position={[-0.34, -0.18, -0.75]} rotation={[-0.29, 0, 0]}>
                <mesh
                  material={materials.INT_OCC_Skin_GREY2}
                  geometry={nodes.Object001_INT_OCC_Skin_GREY2_0.geometry}
                />
              </group>
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials['22_-_Default']} geometry={nodes['pipr_22_-_Default_0'].geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_PLATE_plastic} geometry={nodes.Plate_LODA_EXT_PLATE_plastic_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_Plastic_Black}
                geometry={nodes.polymsh16_SUB1_EXT_Plastic_Black_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_Base}
                geometry={nodes.polymsh_detached148_INT_Decals_Plastic_Base_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Details} geometry={nodes.polymsh_detached32_EXT_Details_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Details} geometry={nodes.polymsh_detached33_SUB0_EXT_Details_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Chrome} geometry={nodes.polymsh_detached33_SUB1_EXT_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Details} geometry={nodes.polymsh_detached37_EXT_Details_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_Lights_Chrome}
                geometry={nodes.polymsh_detached55_EXT_Lights_Chrome_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_Lights_Chrome}
                geometry={nodes.polymsh_detached61_EXT_Lights_Chrome_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Chrome} geometry={nodes.polymsh_detached64_EXT_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Chrome} geometry={nodes.polymsh_detached65_EXT_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_Calipers}
                geometry={nodes.polymsh_detached67_SUB0_EXT_Calipers_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.black} geometry={nodes.polymsh_detached67_SUB1_black_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Glass} geometry={nodes.polymsh_extracted10_EXT_Glass_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Glass} geometry={nodes.polymsh_extracted11_EXT_Glass_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_alfa_NM}
                geometry={nodes.polymsh_extracted21_SUB0_INT_Decals_Plastic_alfa_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_alfa_NM}
                geometry={nodes.polymsh_extracted21_SUB1_INT_Decals_Flat_alfa_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Plastic_REF}
                geometry={nodes.polymsh_extracted21_SUB2_INT_Decals_Plastic_REF_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Metal_Alfa}
                geometry={nodes.polymsh_extracted21_SUB3_INT_Decals_Metal_Alfa_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Chrome_Alfa}
                geometry={nodes.polymsh_extracted21_SUB4_INT_Decals_Chrome_Alfa_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Seams} geometry={nodes.polymsh_extracted24_INT_Seams_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Seams} geometry={nodes.polymsh_extracted25_INT_Seams_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Seams} geometry={nodes.polymsh_extracted26_INT_Seams_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Seams} geometry={nodes.polymsh_extracted27_INT_Seams_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.INT_Seams} geometry={nodes.polymsh_extracted31_INT_Seams_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.INT_Decals_Flat_alfa_NM}
                geometry={nodes.polymsh_extracted34_INT_Decals_Flat_alfa_NM_0.geometry}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.radiar} geometry={nodes.rad_radiar_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.REARLIGHT_0_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.REARLIGHT_1_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.REARLIGHT_2_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.REARLIGHT_3_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.REARLIGHT_4_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.EXT_Lights_Chrome} geometry={nodes.REARLIGHT_5_EXT_Lights_Chrome_0.geometry} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.EXT_RearLight_Beam}
                geometry={nodes.REARLIGHT_Beam_EXT_RearLight_Beam_0.geometry}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
})

export default Car
