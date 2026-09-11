import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import { FaPlus, FaChevronUp, FaChevronDown, FaHeart } from "react-icons/fa";
import {
  subscribeToCollection,
  subscribeToDoc,
  addItem,
  updateItem,
  deleteItem,
  swapOrder,
  uploadFile,
  setDocData,
} from "../../firebase/homeContent";
import {
  subscribeLikeCount,
  subscribeComments,
  deleteComment,
} from "../../firebase/portfolioEngagement";
import "./ContentManager.css";
import "./PortfolioManager.css";

const IMAGE_TABS = {
  gallery: {
    label: "Project Gallery",
    collection: "portfolioGallery",
    folder: "portfolioGallery",
    likePrefix: "gallery",
    defaults: [
      {
        image: "/clients/galladpos.png",
        caption: "GalladTech Platforms — Brand Identity",
      },
      {
        image: "/clients/futureleader.png",
        caption: "Future Leaders Academy — School Branding",
      },
      {
        image: "/clients/dreamcrt.png",
        caption: "Dream CRT — Trading Academy",
      },
    ],
  },
  awards: {
    label: "Awards & Certificates",
    collection: "portfolioAwards",
    folder: "portfolioAwards",
    likePrefix: "award",
    defaults: [
      {
        image: "/certificates/award1.png.jpeg",
        caption: "GalladTech Platforms — Certificate of Excellence",
      },
      {
        image: "/certificates/award2.png.jpeg",
        caption: "Gulled Ibrahim Dahir — Certificate of Excellence",
      },
    ],
  },
  clients: {
    label: "Trusted Clients",
    collection: "portfolioClients",
    folder: "portfolioClients",
    likePrefix: "client",
    defaults: [
      { image: "/clients/galladpos.png", caption: "GalladTech Platforms" },
      { image: "/clients/futureleader.png", caption: "Future Leaders Academy" },
      { image: "/clients/dreamcrt.png", caption: "Dream CRT Academy" },
    ],
  },
};

// Small card showing live like count + comment moderation for one item.
function EngagementPanel({ itemKey }) {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubLikes = subscribeLikeCount(itemKey, setLikeCount);
    const unsubComments = subscribeComments(itemKey, setComments);

    return () => {
      unsubLikes();
      unsubComments();
    };
  }, [itemKey]);

  const handleDeleteComment = async (id) => {
    if (!window.confirm("Ma hubtaa inaad tirtirto faallooyinkan?")) return;

    try {
      await deleteComment(id);
    } catch (error) {
      console.error("Delete comment error:", error);
    }
  };

  return (
    <div className="pm-engagement">
      <div className="pm-engagement-stats">
        <span className="pm-like-stat">
          <FaHeart /> {likeCount}
        </span>

        <button
          className="pm-comment-toggle"
          onClick={() => setOpen((v) => !v)}
        >
          Faallooyin ({comments.length})
        </button>
      </div>

      {open && (
        <div className="pm-comment-list">
          {comments.length === 0 && (
            <p className="pm-no-comments">Wax faallo ah lama helin.</p>
          )}

          {comments.map((c) => (
            <div className="pm-comment-item" key={c.id}>
              <div>
                <strong>{c.name}</strong>
                <span>{c.text}</span>
              </div>
              <button onClick={() => handleDeleteComment(c.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PortfolioManager() {
  const [activeTab, setActiveTab] = useState("demo");

  const [demo, setDemo] = useState({ videoUrl: "", posterUrl: "" });
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [uploadingPoster, setUploadingPoster] = useState(false);

  const [images, setImages] = useState({
    gallery: [],
    awards: [],
    clients: [],
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [modalImage, setModalImage] = useState("");
  const [modalCaption, setModalCaption] = useState("");
  const [uploadingModalImage, setUploadingModalImage] = useState(false);
  const [saving, setSaving] = useState(false);
  const [reordering, setReordering] = useState(false);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    const unsubDemo = subscribeToDoc("portfolioDemo", "main", (data) => {
      if (data) setDemo(data);
    });

    const unsubscribers = Object.entries(IMAGE_TABS).map(([key, tab]) =>
      subscribeToCollection(tab.collection, (items) => {
        setImages((prev) => ({ ...prev, [key]: items }));
      })
    );

    return () => {
      unsubDemo();
      unsubscribers.forEach((unsub) => unsub());
    };
  }, []);

  const handleVideoFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploadingVideo(true);

    try {
      const url = await uploadFile(file, "portfolioDemo");
      await setDocData("portfolioDemo", "main", { videoUrl: url });
    } catch (error) {
      console.error("Video upload error:", error);
      alert("Muuqaalka lama soo shubi karin. Isku day mar kale.");
    } finally {
      setUploadingVideo(false);
      e.target.value = "";
    }
  };

  const handlePosterFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploadingPoster(true);

    try {
      const url = await uploadFile(file, "portfolioDemo");
      await setDocData("portfolioDemo", "main", { posterUrl: url });
    } catch (error) {
      console.error("Poster upload error:", error);
      alert("Sawirka lama soo shubi karin. Isku day mar kale.");
    } finally {
      setUploadingPoster(false);
      e.target.value = "";
    }
  };

  const isImageTab = activeTab !== "demo";
  const activeImageTab = IMAGE_TABS[activeTab];
  const activeItems = images[activeTab] || [];

  const openAddModal = () => {
    setEditingItem(null);
    setModalImage("");
    setModalCaption("");
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setModalImage(item.image);
    setModalCaption(item.caption || "");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingItem(null);
    setModalImage("");
    setModalCaption("");
  };

  const handleModalImageFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploadingModalImage(true);

    try {
      const url = await uploadFile(file, activeImageTab.folder);
      setModalImage(url);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Sawirka lama soo shubi karin. Isku day mar kale.");
    } finally {
      setUploadingModalImage(false);
      e.target.value = "";
    }
  };

  const handleSaveImage = async () => {
    if (!modalImage) {
      alert("Fadlan marka hore sawir soo shub.");
      return;
    }

    setSaving(true);

    try {
      if (editingItem) {
        await updateItem(activeImageTab.collection, editingItem.id, {
          image: modalImage,
          caption: modalCaption,
        });
      } else {
        await addItem(
          activeImageTab.collection,
          { image: modalImage, caption: modalCaption },
          activeItems.length
        );
      }

      closeModal();
    } catch (error) {
      console.error("Save error:", error);
      alert("Wax bay ku qaldantay keydinta. Isku day mar kale.");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteImage = async (item) => {
    if (!window.confirm("Ma hubtaa inaad tirtirto sawirkan?")) return;

    try {
      await deleteItem(activeImageTab.collection, item.id);
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
        activeImageTab.collection,
        activeItems[index],
        activeItems[targetIndex]
      );
    } catch (error) {
      console.error("Reorder error:", error);
    } finally {
      setReordering(false);
    }
  };

  const handleSeedDefaults = async () => {
    if (
      !window.confirm(
        `Ku soo celi ${activeItems.length > 0 ? "dheeraad ahaan " : ""}content-kii hore ee ${activeImageTab.label}?`
      )
    )
      return;

    setSeeding(true);

    try {
      for (let i = 0; i < activeImageTab.defaults.length; i++) {
        const item = activeImageTab.defaults[i];

        await addItem(
          activeImageTab.collection,
          item,
          activeItems.length + i
        );
      }
    } catch (error) {
      console.error("Seed error:", error);
      alert("Wax bay ku qaldantay soo celinta.");
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#0f172a", color: "#fff" }}>
        <Topbar />

        <div className="cm-wrap">
          <h1 style={{ marginBottom: 20 }}>Portfolio Manager</h1>

          <div className="cm-tabs">
            <button
              className={`cm-tab ${activeTab === "demo" ? "active" : ""}`}
              onClick={() => setActiveTab("demo")}
            >
              Demo Video
            </button>

            {Object.entries(IMAGE_TABS).map(([key, tab]) => (
              <button
                key={key}
                className={`cm-tab ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "demo" && (
            <div className="pm-video-panel">

              <div className="cm-field">
                <label>Muuqaalka Demo-ga (Video)</label>

                {demo.videoUrl && (
                  <video
                    key={demo.videoUrl}
                    className="pm-video-preview"
                    src={demo.videoUrl}
                    controls
                  />
                )}

                <label className="cm-upload-btn">
                  {uploadingVideo ? "Soo shubaya..." : "Ka doorso muuqaalka jehiga"}
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoFile}
                    disabled={uploadingVideo}
                    style={{ display: "none" }}
                  />
                </label>
              </div>

              <div className="cm-field">
                <label>Sawirka Hordhaca (Poster)</label>

                {demo.posterUrl && (
                  <img
                    className="pm-poster-preview"
                    src={demo.posterUrl}
                    alt="Poster preview"
                  />
                )}

                <label className="cm-upload-btn">
                  {uploadingPoster ? "Soo shubaya..." : "Ka doorso sawirka jehiga"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePosterFile}
                    disabled={uploadingPoster}
                    style={{ display: "none" }}
                  />
                </label>
              </div>

              <p className="pm-save-note">
                Marka aad sawir/muuqaal soo shubto, si toos ah ayuu isugu
                keydiyaa — website-ka wuu isbeddelayaa isla markiiba.
              </p>

            </div>
          )}

          {isImageTab && (
            <>
              <div className="pm-toolbar">
                <button className="cm-add-btn" onClick={openAddModal}>
                  <FaPlus /> Ku dar {activeImageTab.label}
                </button>

                <button
                  className="pm-seed-btn"
                  onClick={handleSeedDefaults}
                  disabled={seeding}
                >
                  {seeding ? "Soo celinaya..." : "Ku soo celi content-kii hore"}
                </button>
              </div>

              {activeItems.length === 0 ? (
                <div className="cm-empty">
                  Wax lama helin. Riix "Ku dar" si aad u darto sawir, ama
                  "Ku soo celi content-kii hore" si aad u soo bandhigto
                  wixii hore website-ka ku sii jiray.
                </div>
              ) : (
                <div className="pm-image-grid">
                  {activeItems.map((item, index) => (
                    <div className="pm-image-card" key={item.id}>
                      <img src={item.image} alt="" />

                      {item.caption && (
                        <p className="pm-image-caption">{item.caption}</p>
                      )}

                      <div className="pm-image-card-footer">
                        <div className="pm-image-order">
                          <button
                            onClick={() => handleMove(index, "up")}
                            disabled={index === 0 || reordering}
                            title="Kor u qaad"
                          >
                            <FaChevronUp />
                          </button>
                          <button
                            onClick={() => handleMove(index, "down")}
                            disabled={
                              index === activeItems.length - 1 || reordering
                            }
                            title="Hoos u dhig"
                          >
                            <FaChevronDown />
                          </button>
                        </div>

                        <div className="pm-image-actions">
                          <button
                            className="pm-image-edit"
                            onClick={() => openEditModal(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="pm-image-delete"
                            onClick={() => handleDeleteImage(item)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <EngagementPanel
                        itemKey={`${activeImageTab.likePrefix}_${item.id}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {modalOpen && (
        <div className="cm-modal-overlay" onClick={closeModal}>
          <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
            <h2>
              {editingItem ? "Edit" : "Ku dar"} {activeImageTab?.label}
            </h2>

            <div className="cm-field">
              <label>Sawir</label>

              {modalImage && (
                <img
                  src={modalImage}
                  alt="Preview"
                  className="cm-upload-preview"
                />
              )}

              <label className="cm-upload-btn">
                {uploadingModalImage ? "Soo shubaya..." : "Ka doorso sawirka jehiga"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleModalImageFile}
                  disabled={uploadingModalImage}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div className="cm-field">
              <label>Qoraal (Caption) — ikhtiyaari</label>
              <textarea
                value={modalCaption}
                onChange={(e) => setModalCaption(e.target.value)}
                placeholder="Tusaale: GalladTech Platforms — Brand Identity"
              />
            </div>

            <div className="cm-modal-actions">
              <button className="cm-cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="cm-save-btn"
                onClick={handleSaveImage}
                disabled={saving || uploadingModalImage}
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