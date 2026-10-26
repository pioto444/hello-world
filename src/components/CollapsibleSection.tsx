import { useState, type ReactNode } from 'react';

type Props = {
  title?: string;
  children: ReactNode;
};

const CollapsibleSection = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title ?? "Sekcja"} {isOpen ? "▾" : "▸"}
      </button>
      {isOpen ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                {children}
            </div>
      ) : null}
    </div>
  );
}

export default CollapsibleSection
