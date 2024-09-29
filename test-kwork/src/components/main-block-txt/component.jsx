import { useTrail, a } from "@react-spring/web";
import React from "react";

const AnimMainText = ({open, children}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className='text-start font-semibold text-xl relative w-full will-change-transform overflow-hidden' style={style}>
          <a.div className='pr-[0.05em]' style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );

//   position: relative;
//   width: 100%;
//   height: 80px;
//   line-height: 80px;
//   color: white;
//   font-weight: 800;
//   letter-spacing: -0.05em;
//   will-change: transform, opacity;
//   overflow: hidden;
};

export default AnimMainText;
