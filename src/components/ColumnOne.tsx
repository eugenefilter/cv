import About from "./About";
import AdditionalDetails from "./AdditionalDetails";
import Languages from "./Languages";
import Links from "./Links";
import References from "./References";

export default function ColumnOne() {
  return (
    <div className="flex flex-col items-center gap-8">
      <About />
      <Links />
      <References />
      <Languages />
      <AdditionalDetails />
    </div>
  )
}
