import { FaBook, FaBug, FaCloud, FaCrop, FaLaptop, FaLeaf, FaWater } from "react-icons/fa";

const Services = [
    {
      id: 1,
      title: "Pest Management",
      icon: <FaBug style={{ color: 'green' }}/>,
      description:
        "Effectively combat pests and diseases threatening your crops with our advanced pest management feature. Identify common pests, detect outbreaks early, and receive tailored recommendations for control measures.\n ✅ Identify common pests and diseases using symptom recognition or image analysis tools. \n ✅ Monitor pest activity with sensors or cameras, allowing for early detection and intervention. \n ✅ Implement Integrated Pest Management (IPM) strategies, including cultural, biological, and chemical control methods. \n ✅ Analyze data to assess the effectiveness of pest control measures and refine management strategies.",
    },
    {
      id: 2,
      title: "Irrigation Control",
      icon: <FaWater style={{ color: 'green' }}/>,
      description:
        "Optimize water usage and ensure healthy crop growth with our intelligent irrigation control system. Monitor soil moisture levels in real-time, schedule irrigation based on data-driven insights, and customize plans to suit different crop requirements.\n ✅ Monitor soil moisture levels to determine irrigation needs accurately. \n ✅ Optimize irrigation schedules based on soil moisture, weather forecasts, and crop water requirements. \n ✅ Incorporate water conservation techniques like drip irrigation and rainwater harvesting\n ✅ Enable remote control and automation of irrigation systems for convenience and efficiency.",
    },
    {
      id: 3,
      title: "Learning and Knowledge Portal",
      icon: <FaLaptop />,
      icon: <FaBook style={{ color: 'green' }}/>,
      description:
        "Expand your agricultural knowledge and skills through our comprehensive Learning and Knowledge Portal. Access a wealth of educational resources, including tutorials, guides, and community forums, designed to empower farmers and promote sustainable practices. \n ✅ Provide access to a comprehensive library of educational resources covering various agricultural topics.\n ✅ Offer interactive learning modules, quizzes, and webinars to engage users and reinforce learning. \n ✅ Connect farmers with agricultural experts through forums and Q&A sessions for personalized advice. \n ✅ Continuously update the portal with the latest research findings and industry insights to keep users informed and empowered.",
    },
    {
      id: 4,
      title: "Crop Monitoring",
      icon: <FaLeaf style={{ color: 'green' }}/>,
      description:
        "Gain real-time insights into the growth and health of crops through our intuitive monitoring system. Track essential metrics such as growth rate, flowering, and fruiting stages with precision. \n ✅ Utilize IoT sensors to monitor vital parameters like soil moisture, temperature, and nutrient levels in real-time. \n ✅ Visualize crop health data through easy-to-understand charts and graphs. \n ✅ Receive customizable alerts for irregularities in crop conditions, enabling timely intervention. \n ✅ Analyze historical data to identify trends and optimize crop management strategies.",
    },
    {
      id: 5,
      title: "Weather Forecasting",
      icon: <FaCloud style={{ color: 'green' }}/>,
      description:
        "Stay ahead of the curve with accurate weather forecasts tailored to your farm's location. Receive timely predictions for temperature, precipitation, humidity, and wind speed, enabling informed decision-making. \n ✅ Integrate reliable weather APIs to provide accurate forecasts for the farm's location. \n ✅ Customize forecasts based on specific parameters like temperature, precipitation, and wind speed. \n ✅ Receive alerts for weather events that could impact farming operations, such as frost warnings or heavy rainfall. \n ✅ Access historical weather data for trend analysis and informed decision-making.",
    },
  ];

  export default Services;