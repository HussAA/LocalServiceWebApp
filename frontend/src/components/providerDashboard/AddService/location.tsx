import ProgressLayout from './progressLayout';

const completedSteps: boolean[] = [true, true, true, false, false];

const CreateServiceLocation: React.FC = () => {
  return (
    <div className=''>
      <ProgressLayout completedSteps={completedSteps} />
    </div>
  );
};

export default CreateServiceLocation;