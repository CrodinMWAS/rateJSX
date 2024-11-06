import { FormEvent, useState } from "react";
import star from "../../../images/icon-star.svg";
import thankYou from "../../../images/illustration-thank-you.svg";

const Rating = () => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [rate, setRate] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  const handleRateChange = (rate: number) => {
    setRate(rate);
  };

  return (
    <>
      {isSubmitted ? (
        <form onSubmit={handleSubmit} className="container">
          <div className="star-container">
            <img src={star} alt="Star." title="Star." />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering !
          </p>
          <div className="buttonGroup">
            {[1, 2, 3, 4, 5].map((button) => (
              <button onClick={() => handleRateChange(button)} type="button">
                {button}
              </button>
            ))}
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      ) : (
        <div className="container">
          <img src={thankYou} alt="Thankyou." title="Thankyou." />
          <div className="selectedRate">
            <p>You selected {rate} out of 5 </p>
          </div>
          <h1>Thank You</h1>
          <p>
            We appreciate you takin the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
    </>
  );
};

export default Rating;
