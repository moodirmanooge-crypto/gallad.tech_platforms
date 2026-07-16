export default function PortfolioReviews() {

const reviews=[

{
name:"Ahmed Ali",
company:"Future Leader Academy",
text:"GalladTech delivered an outstanding School Management System. Very professional team.",
rating:"★★★★★"
},

{
name:"Fatima Hassan",
company:"Business Owner",
text:"Our POS System increased our business efficiency dramatically.",
rating:"★★★★★"
},

{
name:"Mohamed Nur",
company:"Startup Founder",
text:"Amazing AI website and mobile app. Highly recommended.",
rating:"★★★★★"
}

];

return(

<section
style={{
marginTop:80
}}
>

<h2
style={{
color:"#fff",
textAlign:"center",
fontSize:40,
marginBottom:50
}}
>
Client Reviews
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
gap:25
}}
>

{reviews.map((review,index)=>(

<div
key={index}
style={{
background:"#16213e",
padding:30,
borderRadius:18
}}
>

<h3
style={{
color:"#fff"
}}
>
{review.name}
</h3>

<p
style={{
color:"#3b82f6"
}}
>
{review.company}
</p>

<p
style={{
marginTop:20,
color:"#cbd5e1",
lineHeight:1.8
}}
>
"{review.text}"
</p>

<h2
style={{
marginTop:20,
color:"#facc15"
}}
>
{review.rating}
</h2>

</div>

))}

</div>

</section>

)

}