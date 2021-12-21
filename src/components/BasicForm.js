import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const inputClass = (hasError) =>
  hasError ? "form-control invalid" : "form-control";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: entredNameHasError,
    valueChangeHandler: nameChangeHander,
    inputBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: entredLNameHasError,
    valueChangeHandler: lnameChangeHander,
    inputBlurHandler: lnameBlurHandler,
    reset: lnameInputReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let fromIsValid = false;
  if (enteredNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    fromIsValid = true;
  }

  const formSubmiHandler = (event) => {
    event.preventDefault();

    if (!fromIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredLName);
    console.log(enteredEmail);

    nameInputReset();
    lnameInputReset();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmiHandler}>
      <div className="control-group">
        <div className={inputClass(entredNameHasError)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHander}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {entredNameHasError && (
            <p className={"error-text"}>Invalid First Name.</p>
          )}
        </div>

        <div className={inputClass(entredLNameHasError)}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={lnameChangeHander}
            onBlur={lnameBlurHandler}
            value={enteredLName}
          />
          {entredLNameHasError && (
            <p className={"error-text"}>Invalid Last Name.</p>
          )}
        </div>
      </div>

      <div className={inputClass(emailInputHasError)}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className={"error-text"}>Invalid Email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
