import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from ".././components/ui/card";
import { Badge } from ".././components/ui/badge";
import { Button } from ".././components/ui/button";
import { Label } from ".././components/ui/label";
import { Input } from ".././components/ui/input";

// Define types for the resume data
interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: string[];
}

const InteractiveElement: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    fullName: "",
    email: "",
    phone: "",
    education: [],
    experience: [],
    skills: [],
  });

  const [currentSection, setCurrentSection] = useState<
    "personal" | "education" | "experience" | "skills" | "preview"
  >("personal");
  const [educationItem, setEducationItem] = useState<EducationItem>({
    institution: "",
    degree: "",
    year: "",
  });
  const [experienceItem, setExperienceItem] = useState<ExperienceItem>({
    company: "",
    position: "",
    duration: "",
  });
  const [skill, setSkill] = useState<string>("");

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducationItem({ ...educationItem, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperienceItem({ ...experienceItem, [e.target.name]: e.target.value });
  };

  const addEducation = () => {
    if (
      educationItem.institution &&
      educationItem.degree &&
      educationItem.year
    ) {
      setResumeData({
        ...resumeData,
        education: [...resumeData.education, educationItem],
      });
      setEducationItem({ institution: "", degree: "", year: "" });
    }
  };

  const addExperience = () => {
    if (
      experienceItem.company &&
      experienceItem.position &&
      experienceItem.duration
    ) {
      setResumeData({
        ...resumeData,
        experience: [...resumeData.experience, experienceItem],
      });
      setExperienceItem({ company: "", position: "", duration: "" });
    }
  };

  const addSkill = () => {
    if (skill) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, skill],
      });
      setSkill("");
    }
  };

  const generateResume = () => {
    setCurrentSection("preview");
  };

  const renderPersonalInfo = () => (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={resumeData.fullName}
              onChange={handlePersonalInfoChange}
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={resumeData.email}
              onChange={handlePersonalInfoChange}
              placeholder="johndoe@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={resumeData.phone}
              onChange={handlePersonalInfoChange}
              placeholder="+1 123 456 7890"
            />
          </div>
          <Button
            onClick={() => setCurrentSection("education")}
            className="w-full"
          >
            Next: Education
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderEducation = () => (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              name="institution"
              value={educationItem.institution}
              onChange={handleEducationChange}
              placeholder="University Name"
            />
          </div>
          <div>
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              name="degree"
              value={educationItem.degree}
              onChange={handleEducationChange}
              placeholder="Bachelor of Science"
            />
          </div>
          <div>
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              name="year"
              value={educationItem.year}
              onChange={handleEducationChange}
              placeholder="2020"
            />
          </div>
          <Button onClick={addEducation} className="w-full">
            Add Education
          </Button>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="p-2 bg-gray-100 rounded">
              <p>
                <strong>{edu.institution}</strong> - {edu.degree} ({edu.year})
              </p>
            </div>
          ))}
          <Button
            onClick={() => setCurrentSection("experience")}
            className="w-full"
          >
            Next: Experience
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderExperience = () => (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={experienceItem.company}
              onChange={handleExperienceChange}
              placeholder="Company Name"
            />
          </div>
          <div>
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              name="position"
              value={experienceItem.position}
              onChange={handleExperienceChange}
              placeholder="Software Engineer"
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              name="duration"
              value={experienceItem.duration}
              onChange={handleExperienceChange}
              placeholder="2018 - 2021"
            />
          </div>
          <Button onClick={addExperience} className="w-full">
            Add Experience
          </Button>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="p-2 bg-gray-100 rounded">
              <p>
                <strong>{exp.company}</strong> - {exp.position} ({exp.duration})
              </p>
            </div>
          ))}
          <Button
            onClick={() => setCurrentSection("skills")}
            className="w-full"
          >
            Next: Skills
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderSkills = () => (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="skill">Skill</Label>
            <Input
              id="skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="e.g., JavaScript"
            />
          </div>
          <Button onClick={addSkill} className="w-full">
            Add Skill
          </Button>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <Button onClick={generateResume} className="w-full">
            Generate Resume
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderPreview = () => (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          Resume Preview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">{resumeData.fullName}</h2>
            <p>
              {resumeData.email} | {resumeData.phone}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Education</h3>
            {resumeData.education.map((edu, index) => (
              <p key={index}>
                <strong>{edu.institution}</strong> - {edu.degree} ({edu.year})
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold">Work Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <p key={index}>
                <strong>{exp.company}</strong> - {exp.position} ({exp.duration})
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-4">
      {currentSection === "personal" && renderPersonalInfo()}
      {currentSection === "education" && renderEducation()}
      {currentSection === "experience" && renderExperience()}
      {currentSection === "skills" && renderSkills()}
      {currentSection === "preview" && renderPreview()}
    </div>
  );
};

export default InteractiveElement;
