import useUseGradient from '@pages/Gradient/hook/useGradient.ts';
import { GradientContainer } from '@pages/Gradient/styles/gradient.styles.ts';

const GradientPage = () => {
  const { containerRef } = useUseGradient();
  return (
    <GradientContainer>
      <canvas id={'gradient-canvas'} ref={containerRef} />
    </GradientContainer>
  );
};

export default GradientPage;
