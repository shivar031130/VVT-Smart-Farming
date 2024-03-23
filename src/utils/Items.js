import { FaCheck } from "react-icons/fa";

const Items = [
  {
    id: 1,
    title: "Basic IoT Farming Plan:",
    subtitle: "(Basic)",
    label: "MYR.",
    price: "330",
    diskon: "MYR500",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
      "Soil moisture sensors \n Temperature and humidity sensors \n Basic weather station \n Mobile app for data visualization \n Email notifications for critical alerts",
    category: "wedding",
  },
  {
    id: 2,
    title: "Standard IoT Farming Plan:",
    subtitle: "(Standard)",
    label: "MYR.",
    price: "660",
    diskon: "MYR1000",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
    "Advanced soil sensors (moisture, pH, nutrient levels) \n Weather station with rainfall measurement \n Crop health monitoring system\n Web dashboard for data analysis \n SMS and email alerts with customizable thresholds \n All basic plan features included",
    category: "wedding",
   
  },
  {
    id: 3,
    title: "Advanced IoT Farming Plan:",
    subtitle: "(Full Features)",
    label: "MYR.",
    price: "1320",
    diskon: "MYR2000",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
    "High-resolution satellite imagery analysis \n Drone-based crop surveillance and mapping \n Livestock tracking and health monitoring system \n Automated irrigation control \nAPI access for third-party integrations\n All basic and standard plans features included",
    category: "wedding",
  },
  {
    id: 4,
    title: "Pro IoT Farming Plan:",
    subtitle: "(Full Features, 24/7 on-site support)",
    label: "MYR.",
    price: "2310",
    diskon: "MYR3500",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
    "AI-powered predictive analytics\nPrecision nutrient application systems\nRobotic automation for harvesting and field operations\nComprehensive farm management software suite\nDedicated technical support and consultancy services\nComprehensive smart IoT devices warranty(lifetime) and guide \n Complete features including all plans",
    category: "wedding",
  },
  {
    id: 5,
    title: "Basic Precision Farming Plan:",
    subtitle: "(Basic)",
    label: "MYR.",
    price: "660",
    diskon: "MYR1000",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
    "Basic soil analysis kit for nutrient assessment\n Planting recommendations based on soil health\n Crop rotation guidance for sustainable land management \n Pest identification guidebook\n Basic pest monitoring tools (e.g., traps)\n Integrated pest management (IPM) principles introduction\n GPS-guided tractor navigation\n Soil sampling and analysis kit\n Basic yield monitoring system\n Crop scouting mobile app\n Access to online tutorials and resources\n Limited Warranty*",
    category: "tokoonline",
  },
  {
    id: 6,
    title: "Standard Precision Farming Plan:",
    subtitle: "(Standard)",
    label: "MYR.",
    price: "1320",
    diskon: "2000",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
      
"Advanced soil mapping and fertility analysis\n Variable rate seeding and fertilization recommendation\n Crop health monitoring using satellite imagery \n Pest population tracking and forecasting\n IPM strategies implementation with digital tools\n Early pest detection through remote sensing technology \n Precision planting and seeding technology \n Variable rate application (VRA) equipment\n Advanced yield monitoring with data analytics\n Remote sensing and satellite imagery analysis\n Integration with farm management software \n Basic features with Limited Warranty*",
    category: "tokoonline",
  },
  {
    id: 7,
    title: "Advanced Precision Farming Plan:",
    subtitle: "(Full Features)",
    label: "MYR.",
    price: "2310",
    diskon: "3500",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
      
"Precision irrigation scheduling based on crop needs\n Climate modeling for predictive crop planning\n Crop growth modeling with advanced algorithms \n Automated pest control systems (e.g., drones)\n AI-powered pest identification and mitigation\n Real-time pest monitoring with IoT sensors\n Autonomous machinery and robotic systems\n Precision irrigation and water management solutions \n Real-time field monitoring with IoT sensors \n Advanced crop modeling and predictive analytics \n Customizable data dashboards and reporting tools\n Basic and Standard features included with Lifetime Warranty*",
    category: "tokoonline",
  },
  {
    id: 8,
    title: "Pro Precision Farming Plan:",
    subtitle: "(Full Feautures, 24/7 on-site support)",
    label: "MYR.",
    price: "3300",
    diskon: "5000",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
      
"Integrated supply chain management for crop traceability \n Advanced agronomic advisory services for crop optimization \n Crop genetics research and customized breeding programs \n Automated pest management with AI-driven solutions \n Collaborative pest control network with neighboring farms \n AI-driven decision support systems \nAdvanced precision planting and harvesting equipment\n Integrated supply chain management solutions\n Dedicated agronomic advisory services\n Continuous innovation and R&D partnerships \n All plans features included with lifetime warranty",
    category: "tokoonline",
  },
  {
    id: 9,
    title: "Basic Smart Irrigation Plan:",
    subtitle: "(Basic)",
    label: "MYR",
    price: "990",
    diskon: "1500",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
      
"Automated scheduling based on weather forecasts\n Basic soil moisture monitoring sensors\n Manual adjustment of irrigation settings via mobile app\nWater usage reports and basic analytics\n Leak detection alerts\n Access to basic irrigation tutorials and resources\n Email and phone support for technical assistance\n Limited Warranty",
    category: "companyprofile",
  },
  {
    id: 10,
    title: "Standard Smart Irrigation Plan:",
    subtitle: "(Standard)",
    label: "MYR",
    price: "1650",
    diskon: "2500",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
    "Enhanced weather-based scheduling with historical data analysis\n Soil moisture sensors with real-time monitoring and alerts\n Integration with local weather stations for accurate forecasts\n Flow monitoring and automatic shutoff in case of leaks\n Advanced analytics for water usage optimization\n Remote access and control via mobile app or web interface\n Customer support with dedicated irrigation experts\n Access to online forums and knowledge base\n Limited Warranty \n Basic features included",
    category: "companyprofile",
  },
  {
    id: 11,
    title: "Advanced Smart Irrigation Plan:",
    subtitle: "(Full features)",
    label: "MYR",
    price: "2640",
    diskon: "4000",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
    "Predictive watering based on plant type, soil conditions, and evapotranspiration rates\n  Integration with IoT sensors for comprehensive environmental monitoring\n Automated adjustment of irrigation schedules based on real-time data\n Automated leak detection and proactive maintenance alerts\n Customizable water budgeting and allocation\n Advanced data analytics for trend analysis and optimization\n Integration with smart home systems and voice assistants\n On-site training and personalized support from irrigation specialists\n Lifetime Warranty \n Basic and Standard features included",
    category: "companyprofile",
  },
  {
    id: 12,
    title: "Pro Smart Irrigation Plan:",
    subtitle: "(Full features with Technical Support)",
    label: "MYR",
    price: "3960",
    diskon: "6000",
    icon: <FaCheck style={{ color: "#31BF73" }}/>,
    description:
    "AI-driven irrigation optimization algorithms for precision water management\n Integration with satellite imagery and drones for crop health assessment\n Dynamic irrigation scheduling based on plant phenology and growth stages \n Advanced water recycling and reuse systems\n Integration with soil moisture probes and advanced sensors network \n Dedicated account manager for customized solutions and support\n Participation in pilot programs for cutting-edge irrigation technologies\n Access to exclusive industry events and networking opportunities \n Lifetime Warranty \n All plans features included with 24/7 technical support",
    category: "companyprofile",
  },
];

export default Items;
