import { Link, useViewTransitionState } from "react-router-dom";

function NavImage({ id, src, alt }) {
  const to = `/image/${id}`;
  const vt = useViewTransitionState(to);

  return (
    <Link to={to} className="block" viewTransition>
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02]"
        style={{
          viewTransitionName: vt ? `image-${id}` : "",
        }}
      />
    </Link>
  );
}

export default NavImage;
