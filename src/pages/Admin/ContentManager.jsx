import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import {
  FaPlus,
  FaChevronUp,
  FaChevronDown,
  FaRobot,
  FaGlobe,
  FaMobileAlt,
  FaCashRegister,
  FaPalette,
  FaServer,
} from "react-icons/fa";
import {
  subscribeToCollection,
  addItem,
  updateItem,
  deleteItem,
  swapOrder,
  uploadImage,
} from "../../firebase/homeContent";
import "./ContentManager.css";

const ICONS = {
  FaRobot: <FaRobot />,
  FaGlobe: <FaGlobe />,
  FaMobileAlt: <FaMobileAlt />,
  FaCashRegister: <FaCashRegister />,
  FaPalette: <FaPalette />,
  FaServer: <FaServer />,
};

const ICON_OPTIONS = Object.keys(ICONS);

// Config per section: Firestore collection name, empty form shape, labels.
const SECTIONS = {
  featuredProjects: {
    label: "Featured Projects",
    collection: "featuredProjects",
    emptyForm: { title: "", type: "", image: "", link: "" },
  },
  services: {
    label: "Our Services",
    collection: "services",
    emptyForm: { title: "", desc: "", icon: "FaRobot", path: "" },
  },
  pricingPlans: {
    label: "Our Pricing",
    collection: "pricingPlans",
    emptyForm: { title: "", price: "", items: [""] },
  },
};

export default function ContentManager() {
  const [activeTab, setActiveTab] = useState("featuredProjects");

  const [data, setData] = useState({
    featuredProjects: [],
    services: [],
    pricingPlans: [],
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // null = adding new
  const [form, setForm] = useState(SECTIONS.featuredProjects.emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [reordering, setReordering] = useState(false);

  // Subscribe to all three collections live.
  useEffect(() => {
    const unsubscribers = Object.values(SECTIONS).map((section) =>
      subscribeToCollection(section.collection, (items) => {
        setData((prev) => ({ ...prev, [section.collection]: items }));
      })
    );

    return () => unsubscribers.forEach((unsub) => unsub());
  }, []);

  const activeSection = SECTIONS[activeTab];
  const activeItems = data[activeTab] || [];

  const openAddModal = () => {
    setEditingItem(null);
    setForm(activeSection.emptyForm);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setForm({ ...item });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingItem(null);
  };

  const handleSave = async () => {
    if (!form.title || !form.title.trim()) {
      alert("Fadlan geli Title.");
      return;
    }

    setSaving(true);

    try {
      const { id, order, ...payload } = form;

      if (editingItem) {
        await updateItem(activeSection.collection, editingItem.id, payload);
      } else {
        await addItem(activeSection.collection, payload, activeItems.length);
      }

      closeModal();
    } catch (error) {
      console.error("Save error:", error);
      alert("Wax bay ku qaldantay keydinta. Isku day mar kale.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Ma hubtaa inaad tirtirto "${item.title}"?`)) return;

    try {
      await deleteItem(activeSection.collection, item.id);
    } catch (error) {
      console.error("Delete error:", error);
      alert("Wax bay ku qaldantay tirtirista.");
    }
  };

  const handleMove = async (index, direction) => {
    if (reordering) return;

    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= activeItems.length) return;

    setReordering(true);

    try {
      await swapOrder(
        activeSection.collection,
        activeItems[index],
        activeItems[targetIndex]
      );
    } catch (error) {
      console.error("Reorder error:", error);
    } finally {
      setReordering(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleImageFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadImage(file, "featuredProjects");
      setForm((prev) => ({ ...prev, image: url }));
    } catch (error) {
      console.error("Upload error:", error);
      alert("Sawirka lama soo shubi karin. Isku day mar kale.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  // ---- pricing "items" list field helpers ----
  const updatePriceItem = (i, value) => {
    const items = [...(form.items || [])];
    items[i] = value;
    setForm({ ...form, items });
  };

  const addPriceItem = () => {
    setForm({ ...form, items: [...(form.items || []), ""] });
  };

  const removePriceItem = (i) => {
    const items = [...(form.items || [])];
    items.splice(i, 1);
    setForm({ ...form, items });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#0f172a", color: "#fff" }}>
        <Topbar />

        <div className="cm-wrap">
          <h1 style={{ marginBottom: 20 }}>Content Manager</h1>

          <div className="cm-tabs">
            {Object.entries(SECTIONS).map(([key, section]) => (
              <button
                key={key}
                className={`cm-tab ${activeTab === key ? "active" : ""}`}
                onClick={() => handleTabChange(key)}
              >
                {section.label}
              </button>
            ))}
          </div>

          <button className="cm-add-btn" onClick={openAddModal}>
            <FaPlus /> Ku dar {activeSection.label}
          </button>

          {activeItems.length === 0 ? (
            <div className="cm-empty">
              Wax lama helin. Riix "Ku dar" si aad u darto {activeSection.label.toLowerCase()}.
            </div>
          ) : (
            <div className="cm-list">
              {activeItems.map((item, index) => (
                <div className="cm-card" key={item.id}>
                  <div className="cm-card-order">
                    <button
                      className="cm-order-btn"
                      onClick={() => handleMove(index, "up")}
                      disabled={index === 0 || reordering}
                      title="Kor u qaad"
                    >
                      <FaChevronUp />
                    </button>
                    <span className="cm-order-num">{index + 1}</span>
                    <button
                      className="cm-order-btn"
                      onClick={() => handleMove(index, "down")}
                      disabled={index === activeItems.length - 1 || reordering}
                      title="Hoos u dhig"
                    >
                      <FaChevronDown />
                    </button>
                  </div>

                  {activeTab === "featuredProjects" && (
                    <img
                      className="cm-card-preview"
                      src={item.image}
                      alt={item.title}
                    />
                  )}

                  {activeTab === "services" && (
                    <div className="cm-card-icon-preview">
                      {ICONS[item.icon] || <FaRobot />}
                    </div>
                  )}

                  <div className="cm-card-body">
                    <h3>{item.title}</h3>

                    {activeTab === "featuredProjects" && <p>{item.type}</p>}
                    {activeTab === "services" && <p>{item.desc}</p>}
                    {activeTab === "pricingPlans" && (
                      <>
                        <p className="cm-price">{item.price}</p>
                        <p>{(item.items || []).join(" · ")}</p>
                      </>
                    )}
                  </div>

                  <div className="cm-card-actions">
                    <button
                      className="cm-edit-btn"
                      onClick={() => openEditModal(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="cm-delete-btn"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {modalOpen && (
        <div className="cm-modal-overlay" onClick={closeModal}>
          <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
            <h2>
              {editingItem ? "Edit" : "Ku dar"} {activeSection.label}
            </h2>

            <div className="cm-field">
              <label>Title</label>
              <input
                value={form.title || ""}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Title"
              />
            </div>

            {activeTab === "featuredProjects" && (
              <>
                <div className="cm-field">
                  <label>Type / Category</label>
                  <input
                    value={form.type || ""}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    placeholder="e.g. Trading Education Platform"
                  />
                </div>
                <div className="cm-field">
                  <label>Sawir (Image)</label>

                  {form.image && (
                    <img
                      src={form.image}
                      alt="Preview"
                      className="cm-upload-preview"
                    />
                  )}

                  <label className="cm-upload-btn">
                    {uploading ? "Soo shubaya..." : "Ka doorso sawirka jehiga"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFile}
                      disabled={uploading}
                      style={{ display: "none" }}
                    />
                  </label>

                  <input
                    value={form.image || ""}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="Ama geli image URL: https://..."
                    style={{ marginTop: 8 }}
                  />
                </div>
                <div className="cm-field">
                  <label>Project Link</label>
                  <input
                    value={form.link || ""}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </>
            )}

            {activeTab === "services" && (
              <>
                <div className="cm-field">
                  <label>Description</label>
                  <textarea
                    value={form.desc || ""}
                    onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    placeholder="Short description"
                  />
                </div>
                <div className="cm-field">
                  <label>Icon</label>
                  <select
                    value={form.icon || "FaRobot"}
                    onChange={(e) => setForm({ ...form, icon: e.target.value })}
                  >
                    {ICON_OPTIONS.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cm-field">
                  <label>Link Path</label>
                  <input
                    value={form.path || ""}
                    onChange={(e) => setForm({ ...form, path: e.target.value })}
                    placeholder="/services/example"
                  />
                </div>
              </>
            )}

            {activeTab === "pricingPlans" && (
              <>
                <div className="cm-field">
                  <label>Price</label>
                  <input
                    value={form.price || ""}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="e.g. $300"
                  />
                </div>
                <div className="cm-field">
                  <label>Features</label>
                  <div className="cm-items-list">
                    {(form.items || []).map((val, i) => (
                      <div className="cm-item-row" key={i}>
                        <input
                          value={val}
                          onChange={(e) => updatePriceItem(i, e.target.value)}
                          placeholder={`Feature ${i + 1}`}
                        />
                        <button
                          className="cm-item-remove"
                          onClick={() => removePriceItem(i)}
                          type="button"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <button
                      className="cm-item-add"
                      onClick={addPriceItem}
                      type="button"
                    >
                      + Ku dar feature
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="cm-modal-actions">
              <button className="cm-cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="cm-save-btn"
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? "Keydinaya..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}