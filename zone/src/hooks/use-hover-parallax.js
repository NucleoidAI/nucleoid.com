/* eslint-disable react-hooks/rules-of-hooks */
import { useSpring, useTransform } from 'framer-motion';

// ----------------------------------------------------------------------

export function useHoverParallax(stiffness = 250, damping = 20) {
  const x = useSpring(0, {
    stiffness,
    damping,
  });
  const y = useSpring(0, {
    stiffness,
    damping,
  });

  const offsetX = (force) => useTransform(x, (event) => event / force);
  const offsetY = (force) => useTransform(y, (event) => event / force);

  const onMouseMoveHandler = (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const onMouseLeaveHandler = () => {
    x.set(0);
    y.set(0);
  };

  return {
    offsetX,
    offsetY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  };
}
