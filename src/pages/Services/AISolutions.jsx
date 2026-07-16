import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

export default function AISolutions() {

return(

<>

<Navbar/>

<div
style={{
paddingTop:120,
paddingBottom:80,
paddingLeft:80,
paddingRight:80,
background:"#0f172a",
minHeight:"100vh",
color:"#fff"
}}
>

<h1 style={{fontSize:50}}>

AI Solutions

</h1>

<p style={{fontSize:20,color:"#94a3b8"}}>

We build intelligent AI systems that automate business processes, customer support, content generation and data analysis.

</p>

<h2>Our AI Services</h2>

<ul>

<li>AI Chatbots</li>

<li>AI Voice Agents</li>

<li>AI Video Generation</li>

<li>Business Automation</li>

<li>Custom AI Systems</li>

<li>Machine Learning</li>

<li>OpenAI Integration</li>

<li>Gemini Integration</li>

</ul>

<button
style={{
marginTop:30,
background:"#2563eb",
color:"#fff",
padding:"15px 35px",
border:"none",
borderRadius:10,
cursor:"pointer"
}}
>

Request AI Project

</button>

</div>

<Footer/>

</>

);

}