interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = '', size = 64 }: IconProps) {
  return (
    <span 
      className={`material-icons ${className}`}
      style={{ fontSize: `${size}px`, color: '#0066cc' }}
    >
      {name}
    </span>
  );
}

