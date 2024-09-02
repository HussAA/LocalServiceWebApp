import ProgressLayout from './progressLayout';

const completedSteps: boolean[] = [true, false, false, false, false];

const CreateServiceInfo: React.FC = () => {
  return (
    <div className=''>
      <ProgressLayout completedSteps={completedSteps} />
    </div>
  );
};

export default CreateServiceInfo;