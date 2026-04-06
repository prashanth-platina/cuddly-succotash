export default function MarqueeBar() {
  const text =
    'Full Stack Developer \u00A0✦\u00A0 React.js \u00A0✦\u00A0 Node.js \u00A0✦\u00A0 Java \u00A0✦\u00A0 Python \u00A0✦\u00A0 MongoDB \u00A0✦\u00A0 PostgreSQL \u00A0✦\u00A0 Scalable Apps \u00A0✦\u00A0';

  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
