export function AuthorName({
  name,
  size,
}: {
  name: string;
  size?: "sm" | "lg";
}) {
  return (
    <span className={` ${size === "lg" ? "text-lg" : "text-sm"}`}>{name}</span>
  );
}
