
export default function Progerss({ value, max = 100 }: {
  value: number,
  max?: number
}) {
  return (
    <>
      <progress value={value} max={max} />
    </>
  );
}