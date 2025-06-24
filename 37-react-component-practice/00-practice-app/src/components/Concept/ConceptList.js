import Concept from "./Concept";

export default function ConceptList({ concepts }) {
  return (
    <ul id="concepts">
      {concepts.map((concept) => (
        <Concept key={concept.title} concept={concept} />
      ))}
    </ul>
  );
}
