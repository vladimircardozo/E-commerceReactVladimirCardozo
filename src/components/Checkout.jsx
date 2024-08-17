export const Checkout = ({ buyer, handleChange, handleOrder }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      handleOrder();
    } else {
      form.reportValidity();
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={buyer.name}
            onChange={handleChange}
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            pattern="[0-9]{10}" 
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            required
          />
          <small className="form-text text-muted">
            Ingrese un número de teléfono válido (10 dígitos).
          </small>
        </div>
        <button type="submit" className="btn btn-primary w-100 border border-0">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
