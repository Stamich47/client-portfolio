export default function ServiceCard({ services }) {
  return (
    <div className="card">
      <img src={services.image} className="card-img-top" alt={services.title} />
      <div className="card-body">
        <h4>{services.title}</h4>
        <p>{services.description}</p>
      </div>
    </div>
  );
}
