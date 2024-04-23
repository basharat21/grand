import Navlink from "./navlink";
import Li from "./li";
import SubUl from "./sub-ul";
import SubNavLink from "./SubNavlink";

export default function Navigation() {
  return (
    <ul className="">
        <Li><Navlink href="home" name="Home" /></Li>
        <Li><Navlink href="about" name="About" /></Li>
        <Li>
            <Navlink href="products" name="Products" />
            <SubUl>
                <li><SubNavLink href="#" name="GASTRO PRODUCTS" /></li>
                <li><SubNavLink href="#" name="ANTI-OSTEOPOROTIC" /></li>
                <li><SubNavLink href="#" name="NUTRACEUTICALS" /></li>
                <li><SubNavLink href="#" name="ANTIBIOTICS" /></li>
                <li><SubNavLink href="#" name="HAEMATINICS" /></li>
                <li><SubNavLink href="#" name="HORMONAL PRODUCTS" /></li>
                <li><SubNavLink href="#" name="ANALGESIC, ANT-INFLAMMATORY" /></li>
                <li><SubNavLink href="#" name="ANTIALLERGIC, COUGH & COLD" /></li>
                <li><SubNavLink href="#" name="ANTI EMETIC" /></li>
                <li><SubNavLink href="#" name="ANTI-FUNGAL" /></li>
                <li><SubNavLink href="#" name="CARDIOVASCULAR PRODUCTS" /></li>
                <li><SubNavLink href="#" name="DIABETIC PRODUCTS" /></li>
            </SubUl>
        </Li>
        <Li>
            <Navlink href="#" name="Careers" />
            <SubUl>
                <li><SubNavLink href="#" name="Life @ Grandcure" /></li>
                <li><SubNavLink href="#" name="Jobs @ Grandcure" /></li>
                <li><SubNavLink href="#" name="Code of Conduct" /></li>
                <li><SubNavLink href="#" name="Submit a resume" /></li>
                <li><SubNavLink href="#" name="Contact HR" /></li>
            </SubUl>
        </Li>
        <Li>
            <Navlink href="#" name="News & Events" />
            <SubUl>
                <li><SubNavLink href="#" name="Latest Launches" /></li>
                <li><SubNavLink href="#" name="Latest News" /></li>
            </SubUl>
        </Li>
        <Li>
            <Navlink href="#" name="Contact" />
            <SubUl>
                <li><SubNavLink href="#" name="General Inquires" /></li>
                <li><SubNavLink href="#" name="General Inquires" /></li>
            </SubUl>
        </Li>
    </ul>     
  );
}
