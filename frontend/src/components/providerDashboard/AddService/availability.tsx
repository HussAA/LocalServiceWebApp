import ProgressLayout from './progressLayout';

const completedSteps: boolean[] = [true, true, false, false, false];

const CreateServiceAvailability: React.FC = () => {
  return (
    <div className=''>
      <ProgressLayout completedSteps={completedSteps} />
    </div>
  );
};

export default CreateServiceAvailability;