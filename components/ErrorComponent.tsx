interface ErrorComponentProps {
  error: any; // replace Error with the type of your error
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ 
  error,
}) => {
  return <p>Error: {error}</p>;
};

export default ErrorComponent;
