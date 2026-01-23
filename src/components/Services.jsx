import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Digital Marketing",
    "Video Editing"
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "auto"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Our Services</h1>

        <ul style={{ marginTop: "20px", fontSize: "18px" }}>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            className="btn btn-secondary"
            style={{ width: "160px" }}
            onClick={() => navigate("/")}
          >
            ⬅ Back to Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;


