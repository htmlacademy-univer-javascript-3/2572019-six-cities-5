import {CirclesWithBar} from 'react-loader-spinner';
import {useAppSelector} from '../../hooks/redux.ts';
import {AuthStatus} from '../../const.ts';
import {RequestStatus} from '../../types/request-status.ts';
import {ReactNode} from 'react';

function LoadingSpinner() : ReactNode {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const requestStatus = useAppSelector((state) => state.requestStatus);

  const isLoading = authorizationStatus === AuthStatus.Unknown || requestStatus === RequestStatus.Process;

  return (
    isLoading &&
    <CirclesWithBar
      height='10vh'
      width='10vw'
      color="#206CFF"
      outerCircleColor="#206CFF"
      innerCircleColor="#206CFF"
      barColor="#206CFF"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass="loading-spinner"
      visible
    />
  );
}

export default LoadingSpinner;
