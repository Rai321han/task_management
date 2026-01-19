const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="h-full min-h-screen bg-background flex items-center justify-center">
      {message}
    </div>
  );
};

export default ErrorMessage;
