import ProgressLayout from './progressLayout';

const completedSteps: boolean[] = [true, true, true, true, true];

const CreateServiceSeo: React.FC = () => {
  return (
    <div className=''>
      <ProgressLayout completedSteps={completedSteps} />
    </div>
  );
};

export default CreateServiceSeo;