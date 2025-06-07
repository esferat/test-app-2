import { ComponentsContainer } from '@pages/Components/styles/components.style.ts';
import Button from '@components/button/Button.tsx';

const ComponentsPage = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <ComponentsContainer>
      <Button onClick={handleClick} label={'Awesome button'} />
    </ComponentsContainer>
  );
};

export default ComponentsPage;
