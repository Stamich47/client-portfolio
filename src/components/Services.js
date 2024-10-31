import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    image: require("../assets/images/graphic_designer.png"),
    title: "Graphic Design",
    description: "I can design beautiful and modern websites for you.",
  },
  {
    id: 2,
    image: require("../assets/images/branding.png"),
    title: "Branding",
    description: "I can create a unique brand that represents your company.",
  },
  {
    id: 3,
    image: require("../assets/images/web_design.png"),
    title: "Web UX/UI Design",
    description: "I can design user-friendly interfaces for your website.",
  },
  {
    id: 4,
    image: require("../assets/images/illustration.png"),
    title: "Illustration",
    description: "I can create custom illustrations for your project.",
  },
];

export default function Services() {
  return (
    <div id="services" className="services-section">
      <h2 className="header-style text-center mb-4">My Services</h2>
      <div className="card-flex">
        {services.map((service) => (
          <ServiceCard key={service.id} services={service} />
        ))}
      </div>
    </div>
  );
}
