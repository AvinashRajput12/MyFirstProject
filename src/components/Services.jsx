import { useNavigate, useLocation } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Digital Marketing",
    "Video Editing"
  ];

  const searchQuery =
    new URLSearchParams(location.search).get("search") || "";

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (service) => {
    if (service === "Video Editing") {
      // 👉 apna Instagram profile link yaha daalo
      window.open(
        "https://www.instagram.com/your_instagram_username",
        "_blank"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundImage:
          "url('https://www.instagram.com/aurawith__avi?igsh=MW5rczZicTd5bDBjMQ==')",
        backgroundSize: "cover"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "auto"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Our Services</h1>

        {filteredServices.length > 0 ? (
          <ul style={{ marginTop: "20px", fontSize: "18px" }}>
            {filteredServices.map((service, index) => (
              <li
                key={index}
                onClick={() => handleServiceClick(service)}
                style={{
                  padding: "10px",
                  background: service === "Video Editing" ? "#d1e7dd" : "#ffeeba",
                  marginBottom: "8px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  cursor: service === "Video Editing" ? "pointer" : "default"
                }}
              >
                🔹 {service}
                {service === "Video Editing" && (
                  <span style={{ marginLeft: "10px", color: "green" }}>
                    (Visit Instagram)
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            ❌ No service found
          </p>
        )}

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;



