const About = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="w-3/4 text-md h-screen">
        <h1 className="font-bold text-lg">App Description</h1>
        <ul className="list-disc text-md">
          <li>
            This app was created with idea of implementing core concepts inside
            react like functional components, inbuilt hooks and custom hooks
          </li>
          <li>
            <span className="font-semibold">Swiggy's Public API</span> for
            fetching Restaurant List and Menu
          </li>
          <li>
            Created Custom Hook for fetching data{" "}
            <span className="font-semibold">useRestaurant</span>{" "}
          </li>
          <li>
            Loading components on demand{" "}
            <span className="font-semibold">(lazy loading)</span> to make app
            performant.
          </li>
          <li>Rendering Spinner while data fetching</li>
          <li>Tailwing CSS for designing UI</li>
          <li>React Router </li>
          <li>Redux Toolkit for state management</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
