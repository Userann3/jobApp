import JobDetail from "./JobDetail";

const sampleJob = {
  title: "Frontend Developer",
  company: "Tech Innovations Ltd",
  location: "New York, USA",
  salary: "$70,000 - $90,000",
  type: "Full-Time",
  description: "We are looking for a passionate Frontend Developer...",
  skills: ["React.js", "Tailwind CSS", "JavaScript", "Git", "API Integration"],
};

<JobDetail job={sampleJob} />
