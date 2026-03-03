import PersonCard from "../PersonCard";

const organizers = {
  challengeOrganizers: [
    { name: "Vidusha Maam", photo: "https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=" },
    { name: "Sundhara Kumar", photo: "" },
    { name: "Uthradevi", photo: "" },
  ],
  webMasters: [
    { name: "Niranjhan SU", photo: "" },
    { name: "Prajesh Raam", photo: "" },
  ],
  studentVolunteers: [
    // Add student volunteers here when available
  ],
};

const OrganizersSection = () => {
  return (
    <section id="organizers" className="relative py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Our Team
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Organizers
          </h2>
        </div>

        {/* Challenge Organizers */}
        <div className="scroll-reveal mb-12">
          <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
            Challenge Organizers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {organizers.challengeOrganizers.map((person, i) => (
              <div
                key={i}
                className="scroll-reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <PersonCard name={person.name} photo={person.photo} />
              </div>
            ))}
          </div>
        </div>

        {/* Web Masters */}
        <div className="scroll-reveal mb-12">
          <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
            Web Masters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {organizers.webMasters.map((person, i) => (
              <div
                key={i}
                className="scroll-reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <PersonCard name={person.name} photo={person.photo} />
              </div>
            ))}
          </div>
        </div>

        {/* Student Volunteers */}
        {organizers.studentVolunteers.length > 0 && (
          <div className="scroll-reveal">
            <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Student Volunteers
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {organizers.studentVolunteers.map((person, i) => (
                <div
                  key={i}
                  className="scroll-reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <PersonCard name={person.name} photo={person.photo} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrganizersSection;
