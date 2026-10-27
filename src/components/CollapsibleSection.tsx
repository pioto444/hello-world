import { useState, type ReactNode } from 'react';

type Props = {
  title?: string;
  children: ReactNode;
};

const CollapsibleSection = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="mb-4">
      <div className="d-flex justify-content-center align-items-center mb-2">
        <button onClick={() => setIsOpen(!isOpen)}>
          {title ?? "Sekcja"} {isOpen ? "▾" : "▸"}
        </button>
      </div>

      {isOpen && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3 align-items-streach justify-content-center">
            {children}
        </div>
      )}
    </section>
  );
}

export default CollapsibleSection;
