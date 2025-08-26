import React from 'react';

// The departments data now lives inside this component
const departments = [
  {
    slug: "groundwork",
    title: "Groundwork Department (GW)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "pr-media",
    title: "Public Relations & Media Department (PRM)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "content-writing",
    title: "Content Writing Department (CW)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "finance-fundraising",
    title: "Finance and Fundraising Department (FnF)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "social-media",
    title: "Social Media Department (SM)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
  {
    slug: "hr",
    title: "Human Resources Department (HR)",
    description:
      "Creates content that educates, informs and empowers collaboratively synergistically to achieve our mission about menstruation, sustainable products, and breaking taboos.",
  },
];

const DepartmentsGrid = () => {
  return (
    <section className="max-w-[1180px] mx-auto px-4 mb-20">
      {/*
        Layout Strategy (same as Counting component):
        - MOBILE: Flex column to stack and center the cards.
        - TABLET (md): Switches to a 2-column grid.
        - DESKTOP (lg): Switches to a 3-column grid.
      */}
      <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {departments.map(({ slug, title, description }) => (
          <div
            key={slug}
            // MOBILE: Each card has a fixed width of 307px.
            // TABLET (md) & up: Width is reset to auto to fit the grid.
            className="bg-[#FFDFED] p-6 rounded-[15px] transition cursor-default w-[307px] md:w-auto"
          >
            <h3 className="text-[20px] md:text-[24px] font-semibold mb-2">
              {title}
            </h3>
            <p className="text-[14px] md:text-[16px] text-gray-700">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentsGrid;