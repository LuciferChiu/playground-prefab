import {
	BlinnPhongMaterial,
	Camera,
	MeshRenderer,
	PrimitiveMesh,
	Vector3,
	WebGLEngine,
	AssetType
} from "@galacean/engine";


export async function createRuntime() {
	const engine = await WebGLEngine.create({ canvas: "canvas" });
	engine.canvas.resizeByClientSize();


	// const origin = await engine.resourceManager.load<Scene>({
  //   url: '/scene-origin.json',
  //   type: AssetType.Scene
  // });


  const scene = await engine.resourceManager.load<Scene>({
    url: '/scene.json',
    type: AssetType.Scene
  });


	console.log(scene)

  engine.sceneManager.activeScene = scene;

	// const scene = engine.sceneManager.activeScene;
	// const rootEntity = scene.createRootEntity();

	// // init camera
	// const cameraEntity = rootEntity.createChild("camera");
	// cameraEntity.addComponent(Camera);
	// const pos = cameraEntity.transform.position;
	// pos.set(10, 10, 10);
	// cameraEntity.transform.position = pos;
	// cameraEntity.transform.lookAt(new Vector3(0, 0, 0));

	// // init light
	// scene.ambientLight.diffuseSolidColor.set(1, 1, 1, 1);
	// scene.ambientLight.diffuseIntensity = 1.2;

	// // init cube
	// const cubeEntity = rootEntity.createChild("cube");
	// const renderer = cubeEntity.addComponent(MeshRenderer);
	// const mtl = new BlinnPhongMaterial(engine);
	// const color = mtl.baseColor;
	// color.r = 0.0;
	// color.g = 0.8;
	// color.b = 0.5;
	// color.a = 1.0;
	// renderer.mesh = PrimitiveMesh.createCuboid(engine);
	// renderer.setMaterial(mtl);


	engine.run();
}
