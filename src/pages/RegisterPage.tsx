import { useState, type ChangeEvent, type FocusEvent, type SubmitEvent } from 'react';
import { Button } from '../components/ui/Button';
import { TextField } from '../components/ui/TextField';
import { validateRegistration, type RegistrationValues } from '../lib/validateRegistration';

export function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [registered, setRegistered] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const name = event.target.name;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      setRegistered(true);
    }
  }

  function showError(field: keyof RegistrationValues) {
    if (touched[field] || submitAttempted) {
      return errors[field];
    }
    return undefined;
  }

  if (registered) {
    return <p role="status">Thanks, {values.fullName}. You are registered.</p>;
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2>Register</h2>

      <TextField
        label="Full name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError('fullName')}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError('email')}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError('password')}
      />

      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError('confirmPassword')}
      />

      <div className="field">
        <div className="check">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={values.acceptTerms}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={showError('acceptTerms') ? true : undefined}
            aria-describedby={showError('acceptTerms') ? 'acceptTerms-error' : undefined}
          />
          <label htmlFor="acceptTerms">I accept the terms</label>
        </div>
        {showError('acceptTerms') && (
          <p id="acceptTerms-error" className="field-error">{showError('acceptTerms')}</p>
        )}
      </div>

      <Button type="submit">Create account</Button>
    </form>
  );
}
