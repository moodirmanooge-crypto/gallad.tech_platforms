import "./OrderModal.css";
import { useState } from "react";

function OrderModal({ open, onClose, service }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log({
        service,
        fullName,
        phone,
        description,
      });

      alert("Order Submitted Successfully");

      setFullName("");
      setPhone("");
      setDescription("");

      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Order Request</h2>

        <p className="service-name">
          <strong>Service:</strong> {service}
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <textarea
            rows="5"
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div className="buttons">
            <button
              type="button"
              className="cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit"
            >
              Submit Order
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default OrderModal;