import ProgressLayout from './progressLayout';

const completedSteps: boolean[] = [true, true, true, true, false];

const CreateServiceGallery: React.FC = () => {
  return (
    <div className=''>
      <ProgressLayout completedSteps={completedSteps} />
    </div>
  );
};

export default CreateServiceGallery;