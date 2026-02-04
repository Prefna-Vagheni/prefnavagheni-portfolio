function IconContent({ children, divClass = '' }) {
  return (
    <div
      className={`${divClass} rounded-lg bg-background border border-border text-foreground group-hover:text-accent transition-colors flex items-center justify-center`}
    >
      {children}
    </div>
  );
}

export default IconContent;
