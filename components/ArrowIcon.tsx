export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
      <path d={diagonal ? "M5 15 15 5M7 5h8v8" : "M4 10h12m-5-5 5 5-5 5"} />
    </svg>
  );
}
