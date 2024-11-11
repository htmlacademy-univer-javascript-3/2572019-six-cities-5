type PremiumSignProps = {
    show?: boolean;
  }

function PremiumSign({ show } : PremiumSignProps) : JSX.Element | null{
  return !show ? null :
    <div className="place-card__mark">
      <span>Premium</span>
    </div>;
}

export default PremiumSign;
