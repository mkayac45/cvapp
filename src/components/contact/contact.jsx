import "./contact.css";
const Contact =() => {
    return(
<div class = "gmail">
    <h1>İletişim</h1>
    <div class = "row pad">
        <img width={"40"} height={"40"} src="https://w7.pngwing.com/pngs/768/505/png-transparent-mobile-phones-telephone-handset-computer-icons-icon-telefon-text-telephone-call-hand-thumbnail.png"></img>
        <p>Tel: +905********</p>
    </div>
   
    <div class = "row pad">
        <img width={"40"} height={"40"} src = "data:image/png;base64,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"></img>
      <p > ******@gmail.com</p>
    </div>
    <div class = "row pad">
        <img width={"40"} height={"40"} src="https://w7.pngwing.com/pngs/963/92/png-transparent-computer-icons-logo-adress-heart-graphic-designer-dribbble-thumbnail.png"></img>
        <p>Adres:Edirne/Türkiye</p>
    </div>

    <div class = "row pad">
        <img width={"40"} height={"40"} src="https://w7.pngwing.com/pngs/963/92/png-transparent-computer-icons-logo-adress-heart-graphic-designer-dribbble-thumbnail.png"></img>
        <a href="https://github.com/mkayac45">Github</a>
    </div>

    <div class = "row pad">
        <img width={"40"} height={"40"} src="https://w7.pngwing.com/pngs/963/92/png-transparent-computer-icons-logo-adress-heart-graphic-designer-dribbble-thumbnail.png"></img>
        <a href="https://www.linkedin.com/in/mehmet-kayaci-948974190/">Linkedin</a>
    </div>
   
</div>
)
}
export default Contact;