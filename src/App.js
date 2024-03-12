import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LOG from "./LOG.png";
import { Helmet } from "react-helmet";
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import banner4 from './banner4.jpg';
import banner5 from './banner5.jpg';
import banner6 from './banner6.jpg';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: right;
  direction: rtl;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
    justify-content: center; // Centers the logo on mobile
  }
`;

const Logo = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding: 100;
  margin-right: 20px;
`;

const LogoImage = styled.img`
  max-height: 100px;
  margin-right: 200px;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  li {
    margin-left: 20px;

    @media (max-width: 767px) {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }

  a {
    color: #333;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const PageContent = styled.div`
  h2 {
    text-align: center;
  }
`;

const TestimonialCard = styled.div`
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const PublicationBanners = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 5px;
`;

const BannerCard = styled.div`
  width: 300px;
  height: 250px;
  margin: 10px;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 75%;
  height: 90%;
  object-fit: cover;
`;

const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;

const HomePage = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

  const handlePrevBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 3 : prevIndex - 1
    );
  };

  const handleNextBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === banners.length - 3 ? 0 : prevIndex + 1
    );
  };

  const currentBanners = banners.slice(currentBannerIndex, currentBannerIndex + 3);

  return (
    <PageContent>
      <h1>לוקס קרסברג</h1>
      <p>יועץ מיגון יוצא פיקוד העורף</p>

      <h2>המלצות</h2>
      <TestimonialCard>
        <p>
          "שירות מצוין ומקצועי ביותר! לוקס עזר לנו לקבל את כל האישורים הדרושים
          בצורה יעילה ומהירה."
        </p>
        <p>- דוד לוי, מנהל פרויקט</p>
      </TestimonialCard>
      <TestimonialCard>
        <p>
          "הייעוץ של לוקס היה מדויק ומקיף. הוא הבין את הצרכים שלנו והציע פתרונות
          מעולים."
        </p>
        <p>- רחל כהן, אדריכלית</p>
      </TestimonialCard>
      <TestimonialCard>
        <p>
          "אני ממליץ בחום על שירותיו של לוקס. הוא מומחה בתחום והתנהל בצורה מקצועית
          ואדיבה."
        </p>
        <p>- יוסי שמעון, לקוח פרטי</p>
      </TestimonialCard>
      <h2>פרסומים</h2>
      <PublicationBanners>
        <NavigationButton onClick={handlePrevBanner}>&#8249;</NavigationButton>
        {currentBanners.map((banner, index) => (
          <BannerCard key={index}>
            <BannerImage src={banner} alt={`Banner ${currentBannerIndex + index + 1}`} />
          </BannerCard>
        ))}
        <NavigationButton onClick={handleNextBanner}>&#8250;</NavigationButton>
      </PublicationBanners>
    </PageContent>
  );
};

const AboutPage = () => (
  <PageContent>
    <h2>אודות</h2>
    <p>
      לוקס-יעוץ ומיגון, עוסק במתן יעוץ מקצועי בנושא המיגון בפיקוד העורף והג''א.
    </p>
    <p>
      לוקס קרסברג, הנדסאי בניין אשר שירת בפיקוד העורף והג''א במשך שלוש שנים, בהן
      היה אחראי על טופס 4 במחוז דרום ולאחר מכן התמנה לרשות מוסמכת מטעם הג''א
      במערך הרגולציה הארצי בלוד.
    </p>
  </PageContent>
);

const ServicesPage = () => (
  <PageContent>
    <h2>שירותים</h2>
    <ul>
      <li>ייעוץ לאדריכלים, מהנדסים, מנהלי פרויקטים ולקוחות פרטיים</li>
      <li>ייעוץ אדריכלי וקונסטרוקציה</li>
      <li>ייעוץ ראשוני בשלב הסקיצות</li>
      <li>עזרה בהגשת פטורים</li>
      <li>בדיקת מרחבים מוגנים לקראת טופס 4 (אישורי אכלוס)</li>
    </ul>
  </PageContent>
);

const ContactPage = () => (
  <PageContent>
    <h2>צור קשר</h2>
    <p>לוקס קרסברג</p>
    <p>טלפון: 054-9259121</p>
    <p>מייל : lucasker98@gmail.com </p>
  </PageContent>
);

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <title>לוקס יעוץ ומיגון</title>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
        </Helmet>
      </div>
      <Container>
        <Header>
          <LogoWrapper>
            <Logo>לוקס יעוץ ומיגון</Logo>
            <LogoImage src={LOG} alt="Logo" />
          </LogoWrapper>
          <Nav>
            <ul>
              <li>
                <Link to="/">ראשי</Link>
              </li>
              <li>
                <Link to="/about">אודות</Link>
              </li>
              <li>
                <Link to="/services">שירותים</Link>
              </li>
              <li>
                <Link to="/contact">צור קשר</Link>
              </li>
            </ul>
          </Nav>
        </Header>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>

      <Footer>
        <p>&copy; כל הזכויות שמורות ללוקס יעוץ ומיגון</p>
      </Footer>
    </Router>
  );
}

export default App;