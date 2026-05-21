/// <reference types="vite/client" />

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module 'meshline' {
  import { BufferGeometry, Material } from 'three';
  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: number[] | Float32Array | any): void;
  }
  export class MeshLineMaterial extends Material {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
