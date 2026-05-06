import PersonCard from "../PersonCard";

type OrganizerPerson = {
  name: string;
  photo: string;
  link?: string;
  subtext?: string;
};

const organizers = {
  expertAdvisors: [
    {
      name: "Prof. P. Prakash",
      photo: "/Proff_P_Prakash.jpeg",
      link: "https://annauniv.irins.org/profile/117838",
      subtext: "Professor, Anna University - MIT Campus, Chennai",
    },
  ] as OrganizerPerson[],
  challengeOrganizers: [
    {
      name: "Dr. Vidhusha S",
      photo: "/Vidhusha.webp",
      link: "https://www.snuchennai.edu.in/faculty/dr-s-vidhusha/",
      subtext: "SNU Chennai",
    },
    {
      name: "Dr. Sundharakumar K B",
      photo: "/sundar-snuc.webp",
      link: "https://www.snuchennai.edu.in/faculty/dr-k-b-sundhara-kumar/",
      subtext: "SNU Chennai",
    },
    {
      name: "Dr. K Uthradevi",
      photo: "/uthra.jpg",
      link: "https://www.snuchennai.edu.in/dr-k-uthradevi/",
      subtext: "SNU Chennai",
    },
  ] as OrganizerPerson[],
  leadVolunteer: [
    {
      name: "Muhammad Waseem",
      photo: "/waseem.jpeg",
      link: "https://www.linkedin.com/in/hwaseem04/",
      subtext: "1st year MSc Computer Vision, MBZUAI",
    },
  ] as OrganizerPerson[],
  volunteers: [
    {
      name: "Rathish Manivannan",
      photo: "/Rathish.jpeg",
      link: "https://www.linkedin.com/in/rathish-manivannan-795a47258",
      subtext: "Student, SNU Chennai",
    },
    {
      name: "Akshayan Vishaal B",
      photo: "/akshayan.jpeg",
      link: "https://www.linkedin.com/in/akshayanvishaalb/",
      subtext: "Student, SNU Chennai",
    },
    {
      name: "Akshat Sharma",
      photo: "/akshat.jpeg",
      link: "https://www.linkedin.com/in/akshatsharma941",
      subtext: "Student, SNU Chennai",
    },
    {
      name: "Anshukman M J",
      photo: "/anshukman.jpeg",
      link: "https://www.linkedin.com/in/anshukmanmj/",
      subtext: "Student, SNU Chennai",
    },
    {
      name: "Aadithiyaa S",
      photo: "/aadithyaa.jpeg",
      link: "https://www.linkedin.com/in/aadithiyaas",
      subtext: "Student, SNU Chennai",
    },
    {
      name: "Kabin Eshwar R R",
      photo: "/kabin.jpeg",
      link: "https://www.linkedin.com/in/kabin-eshwar-r-r/",
      subtext: "Student, SNU Chennai",
    },
    {
      name: "Vishwa V",
      photo: "/vishwa.jpeg",
      link: "https://www.linkedin.com/in/eincosmos",
      subtext: "Student, SNU Chennai",
    },
  ] as OrganizerPerson[],
  webMasters: [
    {
      name: "Niranjhan SU",
      photo: "/niranjhan.webp",
      link: "https://www.linkedin.com/in/niranjhan-su/",
      subtext: "Student, SNU Chennai",
    },
    {
      name: "Prajesh Raam H S",
      photo: "/prajesh.webp",
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

        {/* Expert Advisor */}
        <div className="scroll-reveal mb-12">
          <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
            Expert Advisor
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-md mx-auto">
              {organizers.expertAdvisors.map((person, i) =>
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
        </div>

        {/* Lead Volunteer */}
        <div className="scroll-reveal mb-12">
          <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
            Lead Volunteer
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-md mx-auto">
              {organizers.leadVolunteer.map((person, i) =>
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
        </div>

        {/* Volunteers */}
        <div className="scroll-reveal mb-12">
          <h3 className="text-center text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
            Volunteering Team
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {organizers.volunteers.map((person, i) =>
              person.link ? (
                <a
                  key={i}
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-reveal block w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
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
                  className="scroll-reveal w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
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
            Web Developers
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
