import React, { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/utils';

const InternationalTelephoneInput = ({ onChange }) => {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    let phoneInput = intlTelInput(phoneInputRef.current, {
      separateDialCode: true,
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
      initialCountry: 'auto',
    });

    // Rest of the code remains the same
    const handleCountryChange = () => {
      const selectedCountryData = phoneInput.getSelectedCountryData();
      const placeholder = selectedCountryData.dialCode ? '+' + selectedCountryData.dialCode : '';
      // phoneInput.setPlaceholder(placeholder);
    };

    phoneInputRef.current.addEventListener('countrychange', handleCountryChange);

    return () => {
      phoneInput.destroy();
      phoneInputRef.current.removeEventListener(
        'countrychange',
        handleCountryChange
      );
    };
  }, []);

  const handlePhoneNumberChange = () => {
    const phone_number = phoneInputRef.current?.value;
    onChange(phone_number);
  };

  return (
    <div className="container">
      <label htmlFor='phone'>Phone Number:</label><br/>
      <input
        ref={phoneInputRef}
        type="tel"
        name="phone"
        id="phone"
        required
        onChange={handlePhoneNumberChange}
      />
    </div>
  );
};

export default InternationalTelephoneInput;
