export default function IngredientsBar() {
  return (
    <section className="ingredients-bar anim-reveal">
      <div className="ingredient">
        <span className="ingredient-label">STACK:</span>
        <span>React.js, Node.js, Java, Python</span>
      </div>
      <div className="ingredient">
        <span className="ingredient-label">FOCUS:</span>
        <span className="gradient-pill" />
        <span>scalable architecture, clean code, modern UI</span>
      </div>
    </section>
  );
}
