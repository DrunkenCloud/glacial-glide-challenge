import PersonCard from "../PersonCard";

type OrganizerPerson = {
  name: string;
  photo: string;
  link?: string;
  subtext?: string;
};

const organizers = {
  challengeOrganizers: [
    {
      name: "Dr. Vidhusha S",
      photo:
        "https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=",
      link: "",
      subtext: "SNU Chennai",
    },
    {
      name: "Dr. Sundharakumar K B",
      photo: "",
      link: "",
      subtext: "SNU Chennai",
    },
    { name: "Dr. K Uthradevi", photo: "", link: "", subtext: "SNU Chennai" },
  ] as OrganizerPerson[],
  webMasters: [
    {
      name: "Niranjhan SU",
      photo: "",
      link: "https://www.linkedin.com/in/niranjhan-su/",
      subtext: "Student, SNU Chennai",
    },
    {
      name: "Prajesh Raam H S",
      photo: "",
      link: "https://www.linkedin.com/in/prajeshraam/",
      subtext: "Student, SNU Chennai",
    },
  ] as OrganizerPerson[],
  studentVolunteers: [
    // Add student volunteers here when available
  ] as OrganizerPerson[],
};

const OrganizersSection = () => {
  return (
    <section id="organizers" className="relative py-12 md:py-16 px-4">
      <div className="max-w-screen-3xl mx-auto">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {organizers.challengeOrganizers.map((person, i) =>
              person.link ? (
                <a
                  key={i}
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-reveal block"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <PersonCard
                    name={person.name}
                    photo={person.photo}
                    subtext={person.subtext}
                  />
                </a>
              ) : (
                <div
                  key={i}
                  className="scroll-reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <PersonCard
                    name={person.name}
                    photo={person.photo}
                    subtext={person.subtext}
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Web Masters */}
        <div className="scroll-reveal mb-12">
          <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
            Web Masters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {organizers.webMasters.map((person, i) =>
              person.link ? (
                <a
                  key={i}
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-reveal block"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <PersonCard
                    name={person.name}
                    photo={person.photo}
                    subtext={person.subtext}
                  />
                </a>
              ) : (
                <div
                  key={i}
                  className="scroll-reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <PersonCard
                    name={person.name}
                    photo={person.photo}
                    subtext={person.subtext}
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Student Volunteers */}
        {organizers.studentVolunteers.length > 0 && (
          <div className="scroll-reveal">
            <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Student Volunteers
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {organizers.studentVolunteers.map((person, i) =>
                person.link ? (
                  <a
                    key={i}
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-reveal block"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <PersonCard
                      name={person.name}
                      photo={person.photo}
                      subtext={person.subtext}
                    />
                  </a>
                ) : (
                  <div
                    key={i}
                    className="scroll-reveal"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <PersonCard
                      name={person.name}
                      photo={person.photo}
                      subtext={person.subtext}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrganizersSection;
