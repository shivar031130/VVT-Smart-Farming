import MisiMSN from "../assets/images/VisiMisiImg/misi.svg"
import LayananMSN from "../assets/images/VisiMisiImg/layanan.svg"
import VisiMSN from "../assets/images/VisiMisiImg/visi.svg"

const visiMisi = [
    {
        id: 1,
        title: <span style={{ color: "#FFFFFF" }}>Mision</span>,
        icon: <img src={MisiMSN} alt="VVT PRODUCTION's Mission" />,
        description:
        <p style={{ color: "#FFFFFF" }}>To empower farmers with innovative solutions, data-driven insights, and collaborative tools, revolutionizing agriculture for a sustainable future.</p>,
    },
    {
        id: 2,
        title: <span style={{ color: "#FFFFFF" }}>Services</span>,
        icon: <img src={LayananMSN} alt="VVT PRODUCTION's Services" />,
        description:
        <p style={{ color: "#FFFFFF" }}>VVT SMART FARMING provides tailored solutions, data insights, and collaboration tools for agriculture. We empower farmers with personalized recommendations, financial management, and essential information. Our platform fosters sustainability through automation and collaboration.</p>,
    },
    {
        id: 3,
        title: <span style={{ color: "#FFFFFF" }}>Vision</span>,
        icon: <img src={VisiMSN} alt="VVT PRODUCTION's Vision" />,
        description:
        <p style={{ color: "#FFFFFF" }}>To lead the digital transformation of agriculture, fostering a global community of informed and empowered farmers, driving towards a greener and more prosperous world.</p>,
    },
];

export default visiMisi;
