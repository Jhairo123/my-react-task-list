export default function Task({ mensaje }) {
  const handleImageClick = () => {};

  return (
    <div
      style={{
        display: "inline-block",
        // height: "2.5rem",
        backgroundColor: "whitesmoke",
        borderRadius: "10rem",
      }}
    >
      {/* checkbox */}
      <input
        type="checkbox"
        className="opcion1"
        name="opciones"
        value="opcion1"
      />
      {/* Label checkbox */}
      <label className="label">{mensaje}</label>
      {/* imagen editar */}
      <img
        className="imagen"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgSizhklDH657yz3n7DSH6nCripsKtMhds9M8xic_cZm04rHSkwiNcg_fg502AWSC48g&usqp=CAU"
        onClick={handleImageClick}
      />
      {/* imagen eliminar */}
      <img
        className="imagen"
        src="https://png.pngtree.com/png-clipart/20220926/original/pngtree-delete-button-3d-icon-png-image_8633077.png"
        onClick={handleImageClick}
      />
    </div>
  );
}
