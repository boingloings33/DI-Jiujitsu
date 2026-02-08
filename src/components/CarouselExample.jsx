import ProgramCarousel from "./ProgramCarousel";

// Example usage in your page
function ExamplePage() {
  const carouselSlides = [
    {
      image: "/path/to/fundamentals.jpg",
      title: "Fundamentals Program",
      description:
        "Master the core techniques and principles of Brazilian Jiu Jitsu. Perfect for beginners and those refining their basics.",
    },
    {
      image: "/path/to/kids.jpg",
      title: "Kids Training",
      description:
        "Build discipline, respect, and confidence in young martial artists through age-appropriate training.",
    },
    {
      image: "/path/to/advanced.jpg",
      title: "Advanced Training",
      description: "Competitive techniques, sparring, and advanced strategies for experienced practitioners.",
    },
  ];

  const options = {
    loop: true,
    align: "center",
  };

  return (
    <div>
      <ProgramCarousel slides={carouselSlides} options={options} />
    </div>
  );
}

export default ExamplePage;
