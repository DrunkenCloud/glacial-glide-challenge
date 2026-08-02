import { Trophy, Award, Medal, Star } from "lucide-react";

const winners = [
  {
    icon: Trophy,
    place: "Winner",
    orderClass: "order-1 md:order-2 md:mb-10",
    team: "Snow_Vision",
    amount: "₹15,000",
    accent: "border-yellow-400/70 bg-yellow-400/10 shadow-[0_0_40px_rgba(250,204,21,0.15)]",
    badge: "bg-yellow-400 text-glacial-deep",
    color: "text-yellow-400",
    members: ["Iyyappan R", "Visves T R", "Senthilarasi M"],
    affiliation: "Thiagarajar College of Engineering, Madurai",
  },
  {
    icon: Award,
    place: "1st Runner-Up",
    orderClass: "order-2 md:order-1",
    team: "GlacierMIT",
    amount: "₹10,000",
    accent: "border-glacial-frost/60 bg-glacial-frost/10",
    badge: "bg-glacial-frost text-glacial-deep",
    color: "text-glacial-frost",
    members: ["Sharron Teena J", "Hrishikesh D"],
    affiliation: "Madras Institute of Technology, Anna University Chennai",
  },
  {
    icon: Medal,
    place: "2nd Runner-Up",
    orderClass: "order-3",
    team: "Glacial Lake Detection",
    amount: "₹5,000",
    accent: "border-accent/60 bg-accent/10",
    badge: "bg-accent text-accent-foreground",
    color: "text-accent",
    members: ["Kiruthika S", "Joshan Athanesious", "Linga Adithya"],
    affiliation: "Vellore Institute of Technology, Chennai",
  },
];

const mentions = [
  {
    team: "ICE KATTI",
    members: ["Santhosh S", "M. S. Rashmika", "Visweshwaran K"],
    affiliation: "Vellore Institute of Technology, Chennai",
  },
  {
    team: "GlacioX",
    members: ["Harshitha Palaram", "Sathwik Gajula"],
    affiliation: "Shiv Nadar University Chennai",
  },
];

const WinnersSection = () => {
  return (
    <section id="winners" className="relative py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Results
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            GLOFeagles '26 Winners
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-5">
            Announced on 24 July 2026 at NCVPRIPG 2026, LNMIIT Jaipur
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:items-end gap-6 md:gap-8 mb-10">
          {winners.map((winner, i) => (
            <div
              key={winner.place}
              className={`scroll-reveal rounded-xl border-2 p-8 md:p-10 text-center backdrop-blur-md transition-all hover:scale-[1.02] ${winner.accent} ${winner.orderClass}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <winner.icon
                className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-5 ${winner.color}`}
              />
              <span
                className={`inline-block rounded-full px-4 py-1 text-xs md:text-sm font-bold uppercase tracking-widest ${winner.badge}`}
              >
                {winner.place}
              </span>
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground mt-4">
                {winner.team}
              </p>
              <p className={`font-display text-3xl md:text-4xl font-bold mt-2 mb-6 ${winner.color}`}>
                {winner.amount}
              </p>
              <ul className="space-y-1.5 mb-4">
                {winner.members.map((member) => (
                  <li
                    key={member}
                    className="text-foreground text-base md:text-lg font-semibold"
                  >
                    {member}
                  </li>
                ))}
              </ul>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                {winner.affiliation}
              </p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal">
          <p className="text-center text-primary text-sm md:text-base font-medium uppercase tracking-widest mb-6">
            Honourable Mentions
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mentions.map((mention) => (
              <div
                key={mention.team}
                className="rounded-xl p-8 text-center border-2 border-dashed border-primary/60 bg-primary/5 backdrop-blur-md"
              >
                <Star className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 text-primary" />
                <p className="font-display text-xl md:text-2xl font-bold text-primary mb-3">
                  {mention.team}
                </p>
                <ul className="space-y-1.5 mb-3">
                  {mention.members.map((member) => (
                    <li
                      key={member}
                      className="text-foreground text-base md:text-lg font-semibold"
                    >
                      {member}
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  {mention.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
