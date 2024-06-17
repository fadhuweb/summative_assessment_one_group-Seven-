document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscriptionForm');

    const validations = {
        firstName: {
            regex: /^[A-Za-z]+$/,
            errorMsg: 'First name can contain letters only.'
        },
        lastName: {
            regex: /^[A-Za-z]+$/,
            errorMsg: 'Last name can contain letters only.'
        },
        email: {
            regex: /^\S+@\S+\.\S+$/,
            errorMsg: 'Please enter a valid email.'
        },
        password: {
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            errorMsg: 'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one special character, and one number.'
        }
    };

    const validateField = (field, regex, errorMsg) => {
        const value = field.value.trim();
        const errorElement = document.getElementById(`${field.id}Error`);
        if (!regex.test(value)) {
            errorElement.textContent = errorMsg;
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.style.display = 'none';
            return true;
        }
    };

    const validatePreferences = () => {
        const preferences = document.querySelectorAll('input[name="preferences"]:checked');
        const errorElement = document.getElementById('preferencesError');
        if (preferences.length === 0) {
            errorElement.textContent = 'Please select at least one subscription preference.';
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.style.display = 'none';
            return true;
        }
    };

    const showSuccessMessage = () => {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Subscription successful!';
        successMessage.style.display = 'block';
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isFormValid = true;

        Object.keys(validations).forEach((key) => {
            const field = document.getElementById(key);
            const { regex, errorMsg } = validations[key];
            if (!validateField(field, regex, errorMsg)) {
                isFormValid = false;
            }
        });

        if (!validatePreferences()) {
            isFormValid = false;
        }

        if (isFormValid) {
            showSuccessMessage();
        }
    });
});
