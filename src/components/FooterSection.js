import React from "react";
import Footer from "../data/FooterData";


const FooterContainer=() => {
    return (
      <Footer>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>About Us</Footer.Title>
              <Footer.Link href="#">Story</Footer.Link>
              <Footer.Link href="#">Client</Footer.Link>
              <Footer.Link href="#">Testimonials</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Contact Us</Footer.Title>
              <Footer.Link href="#">FAQ</Footer.Link>
              <Footer.Link href="#">Support</Footer.Link>
              <Footer.Link href="#">Questions</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Social</Footer.Title>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Instagram</Footer.Link>
              <Footer.Link href="#">Youtube</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Offices</Footer.Title>
              <Footer.Link href="#">Chennai</Footer.Link>
              <Footer.Link href="#">Mumbai</Footer.Link>
              <Footer.Link href="#">Hyderbad</Footer.Link>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
      </Footer>
    );
    
}

export default FooterContainer