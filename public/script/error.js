function errorHandling(err) {
    const status = err.status;
    const errorMessage = err.data.error.message;

    switch(status) {
        case 401:
            if (errorMessage == 'WRONG_PASSWORD') {
                return customErrorAlert('Email & password yang anda masukkan tidak tepat');
            } else if (errorMessage == 'unauthorized') {
                customErrorAlertWithTimer('Mohon maaf anda perlu login terlebih dahulu untuk menikmati layanan kamu');
                setTimeout(() => {
                    window.location.reload('/login')
                }, 2000)
            }
        case 400:
            if (errorMessage == 'ALREADY_VERIFIED') {
                return customErrorAlert('User telah terverifikasi');
            } else if (errorMessage == 'already subscribe newsletter') {
                return customErrorAlert('Anda telah berlangganan, jika ingin berhenti silahkan ubah melalui halaman profile');
            }
            break;
        case 404:
            switch(errorMessage){
                case 'USER_NOT_FOUND':
                    return customErrorAlert('User tidak ditemukan');
                case 'CODE_NOT_FOUND':
                    return customErrorAlert('Kode tidak ditemukan');
                default:
                    break;
            }
            break;
        case 422:
            return validationErrorHandling(err.data.error.errors);
        case 500:
            return unexpectedErrorAlert();
        default:
            breakl
    }
}

function validationErrorHandling(errors) {
    for (property in errors) {
        if (errors[property] === 'IS_EMPTY') {
            return customErrorAlert('Pastikan anda telah mengisi semua inputan!');
        } else if (errors[property] === 'NOT_EMAIL_FORMATTED') {
            return customErrorAlert('Email yang anda masukkan tidak sesuai!');
        } else if (errors[property] === 'ALREADY_TAKEN') {
            return customErrorAlert('Email yang anda masukkan telah terdaftar!');
        } else if (errors[property] === 'NOT_MEET_REQUIREMENT') {
            return customErrorAlert('Password yang anda masukkan tidak sesuai kriteria!');
        }
    }
}