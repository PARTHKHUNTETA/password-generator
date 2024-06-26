import React from "react";

const StrengthChecker = ({ password }) => {
  const getPasswordStrength = () => {
    let strength = 0;
    const passwordLength = password.length;
    if (passwordLength >= 8) {
      strength++;
    }
    if (/[A-Z]/.test(password)) {
      strength++;
    }
    if (/[a-z]/.test(password)) {
      strength++;
    }
    if (/[0-9]/.test(password)) {
      strength++;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      strength++;
    }

    switch (strength) {
      case 0:
        return "";
      case 1:
      case 2:
        return "Weak";
      case 3:
      case 4:
        return "Moderate";
      case 5:
        return "Strong";
      default:
        break;
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password-strength">
      Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default StrengthChecker;
