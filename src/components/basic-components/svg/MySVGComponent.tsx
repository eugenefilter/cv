import { SVGProps } from "react";

export default function MySVGComponent(props: SVGProps<SVGSVGElement>) {
  const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    fill: "#000",
    version: "1.1",
    width: "16px",
    height: "16px",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
  };

  return (
    <svg {...svgProps} {...props}>
      {props.children}
    </svg>
  );
}