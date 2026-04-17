interface SponsorCardProps {
  name: string;
  image: string;
  website?: string;
}

const SponsorCard = ({ name, image, website }: SponsorCardProps) => {
  const CardContent = (
    <div className="glass-card rounded-xl p-8 md:p-10 hover:border-primary/40 transition-all duration-300 h-full flex flex-col items-center justify-center gap-6 group">
      <div className="w-full h-48 md:h-56 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground text-center">
        {name}
      </h3>
    </div>
  );

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default SponsorCard;
