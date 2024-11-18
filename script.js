document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const mobileInput = document.getElementById('mobile');
  const otpInput = document.getElementById('otp');
  const passwordInput = document.getElementById('password');
  const sendOtpButton = document.getElementById('sendOtp');

  let otpSent = null;

  // Simulate sending OTP
  sendOtpButton.addEventListener('click', () => {
    const mobile = mobileInput.value;
    if (!/^\d{10}$/.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    otpSent = Math.floor(1000 + Math.random() * 9000); // Random 4-digit OTP
    alert(`OTP sent to ${mobile}: ${otpSent}`);
  });

  // Validate and Submit Form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const otp = otpInput.value;
    const password = passwordInput.value;
    const userType = document.getElementById('userType').value;

    // Validate OTP
    if (otpSent === null || otp !== otpSent.toString()) {
      alert('Invalid OTP. Please try again.');
      return;
    }

    // Validate Password
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Password must be 11-15 characters long and include at least one letter, one number, and one special symbol.'
      );
      return;
    }

    // Validate User Type
    if (!userType) {
      alert('Please select a user type.');
      return;
    }

    // If everything is valid
    alert(`Registration Successful for ${username} as ${userType}`);
    form.reset();
  });
});
