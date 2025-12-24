import React from 'react';
import Container from '../../../components/Container';
import { motion } from 'motion/react';
import Image from '../../images/react-logo.png';
import Scale from '../../../components/Scale';

const ReactArticle = () => {
  return (
    <Container className={'relative min-h-screen p-10 md:pt-20 md:pb-10'}>
      <Scale />
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', y: 0 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="px-4 md:py-30"
      >
        {/* Header Image */}
        <div className="mx-4 mb-6">
          <motion.img
            initial={{ filter: 'blur(0px)' }}
            whileHover={{ filter: 'blur(2px)' }}
            transition={{ duration: 0.3 }}
            src={Image}
            alt="React Logo"
            className="mx-auto h-20 max-w-full scale-150"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Building Scalable UI with React and Component-Driven Design
        </h1>

        <p className="text-secondary pt-4 text-sm">
          As modern web applications grow in size and complexity, maintaining clean, reusable, and
          scalable user interfaces becomes a critical challenge. Poor UI architecture leads to
          duplicated code, hard-to-track bugs, and slow development cycles.
        </p>

        <p className="text-secondary pt-4 text-sm">
          <strong>React</strong> solves this problem through its component-driven design
          philosophy—a powerful approach that allows developers to break complex UIs into small,
          reusable, and predictable building blocks.
        </p>

        {/* Section */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          What Is Component-Driven Design?
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Component-driven design is an approach where the user interface is built as a collection
          of independent, reusable components. Each component encapsulates its own structure,
          behavior, and styling.
        </p>

        <p className="text-secondary pt-4 text-sm">
          Instead of designing pages first, developers design components first and then compose them
          together to form complete screens.
        </p>

        {/* Benefits */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Why React Is Perfect for Scalable UI
        </h2>

        <ul className="text-secondary list-disc pt-4 pl-5 text-sm">
          <li>Reusable and composable components</li>
          <li>Predictable data flow with props</li>
          <li>Strong ecosystem and tooling</li>
          <li>Easy collaboration across teams</li>
        </ul>

        <p className="text-secondary pt-4 text-sm">
          React enforces a clear separation of concerns while still keeping UI logic close to the
          markup, resulting in better maintainability.
        </p>

        {/* Component Example */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Designing Reusable Components
        </h2>

        <p className="text-secondary pt-4 text-sm">
          A well-designed component should be reusable, configurable, and easy to reason about.
          Props allow components to remain flexible without duplicating logic.
        </p>

        <pre className="text-secondary overflow-x-auto rounded-lg bg-neutral-100 p-4 pt-4 text-sm dark:bg-neutral-800">
          <code>{`const Button = ({ label, onClick }) => (
  <button
    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
    onClick={onClick}
  >
    {label}
  </button>
);`}</code>
        </pre>

        {/* Composition */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Component Composition Over Inheritance
        </h2>

        <p className="text-secondary pt-4 text-sm">
          React encourages composition instead of inheritance. Smaller components are combined
          together to build complex interfaces without creating deep and fragile hierarchies.
        </p>

        <p className="text-secondary pt-4 text-sm">
          This approach improves flexibility and makes refactoring significantly easier as
          applications evolve.
        </p>

        {/* State Management */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Managing State in Scalable Applications
        </h2>

        <p className="text-secondary pt-4 text-sm">
          As applications grow, state management becomes increasingly important. React’s local state
          works well for small components, while tools like Context API, Redux, or Zustand help
          manage global state.
        </p>

        <p className="text-secondary pt-4 text-sm">
          Keeping state minimal and colocated near where it’s used leads to better performance and
          easier debugging.
        </p>

        {/* Folder Structure */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Organizing Components for Scale
        </h2>

        <p className="text-secondary pt-4 text-sm">
          A scalable React project uses a clear folder structure where components, hooks, and
          utilities are logically grouped. Feature-based organization is often preferred over
          type-based grouping.
        </p>

        {/* Performance */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Performance Considerations
        </h2>

        <p className="text-secondary pt-4 text-sm">
          React provides tools like <code>memo</code>, <code>useCallback</code>, and{' '}
          <code>useMemo</code> to prevent unnecessary re-renders. These tools are essential when
          building highly interactive and data-driven UIs.
        </p>

        {/* Conclusion */}
        <h2 className="text-primary pt-10 text-2xl font-bold tracking-tight md:text-4xl">
          Conclusion
        </h2>

        <p className="text-secondary pt-4 text-sm">
          Building scalable UI with React is not just about writing components— it’s about designing
          a system that can grow gracefully over time.
        </p>

        <p className="text-secondary pt-4 text-sm">
          By embracing component-driven design, thoughtful state management, and composition, React
          enables developers to build robust, maintainable, and future-proof applications.
        </p>
      </motion.div>
    </Container>
  );
};

export default ReactArticle;
