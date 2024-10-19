import NavImage from "./NavImage";
import { images } from "../data/images";

function ImageList() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-100">Lista de Imágenes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <NavImage key={image.id} {...image} />
        ))}
        <NavImage id={4} src="/this-image-doesnt-exists.jpg" alt="Esta imágen no existe" />
      </div>
    </div>
  );
}

export default ImageList;
