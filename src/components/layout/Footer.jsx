import { Link } from "react-router-dom";

function Footer(){

return(

<footer style={{ textAlign: "center", padding: "24px 16px", background: "#0f172a", color: "#9eaecb", fontSize: 14 }}>

<div style={{ marginBottom: 8 }}>
<Link to="/privacy-policy" style={{ color: "#93c5fd", fontWeight: 600 }}>
Privacy Policy
</Link>
</div>

© 2026 GalladTech Platforms

</footer>

)

}

export default Footer;