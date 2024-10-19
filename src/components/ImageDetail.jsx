import { useParams, Link } from "react-router-dom";
import { images } from "../data/images";

function ImageDetail() {
  const { id } = useParams();
  const image = images.find((img) => img.id === parseInt(id));

  if (!image) return <ImageNotFound />;

  return (
    <div>
      <Link to="/" className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors duration-300" viewTransition>
        &larr; Volver a la lista
      </Link>
      <h1 className="text-3xl text-gray-100 font-bold mb-6">Detalle de la Imagen</h1>
      <img
        src={image.src}
        alt={image.alt}
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-6 max-h-[50vh] object-cover"
        style={{
          viewTransitionName: `image-${id}`,
        }}
      />
    </div>
  );
}

const ImageNotFound = () => (
  <>
    <Link to="/" className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors duration-300" viewTransition>
      &larr; Volver a la lista
    </Link>
    <div className="text-red-500">Imágen no encontrada</div>
  </>
);

export default ImageDetail;
