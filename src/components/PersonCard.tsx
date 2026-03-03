import { User } from "lucide-react";

interface PersonCardProps {
  name: string;
  photo?: string;
  role?: string;
  subtext?: string;
}

const PersonCard = ({ name, photo, role, subtext }: PersonCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
      <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <User className="w-12 h-12 md:w-14 md:h-14 text-primary/50" />
        )}
      </div>
      <h3 className="text-foreground font-semibold text-base md:text-lg">
        {name}
      </h3>
      {(subtext || role) && (
        <p className="text-muted-foreground text-sm mt-1">{subtext || role}</p>
      )}
    </div>
  );
};

export default PersonCard;
