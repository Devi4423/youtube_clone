import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();

  if(!error) return;
  
  const { status, statusText } = error;

  return (
    <div className=" w-[100%] h-screen flex justify-center flex-col">
      <h1 className="text-3xl font-semibold mb-2 mx-auto">
        {status} || {statusText}
      </h1>
      <h6 className="text-xl font-medium mx-auto"></h6>
    </div>
  );
};

export default ErrorComponent;
